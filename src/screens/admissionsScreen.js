import React, { useState, useMemo, useCallback } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import { styles, Colors } from '../styles/AdmissionsScreenStyle';
import ProcessCard from '../components/processCard';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const initialAdmissionsData = []; 

/**
 * Calcula o status do processo com base no checklist.
 * @param {object} process
 * @returns {'concluído' | 'em processo'}
 */

const calculateProcessStatus = (process) => {
    const IN_PROCESS = 'em processo'; 

    if (!process.checklist || !Array.isArray(process.checklist) || process.checklist.length === 0) {
        return IN_PROCESS; 
    }
    const isAllComplete = process.checklist.every(item => item.isComplete === true);
    return isAllComplete ? 'concluído' : IN_PROCESS;
};

const status_types = ['todos', 'concluído', 'em processo'];

const formatStatusTitle = (status) => {
    if (!status) return '';
    return status.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const FilterButton = React.memo(({ title, status, currentFilter, onPress }) => {
    const isActive = currentFilter === status;
    return (
        <TouchableOpacity
            style={[
                styles.filterButton,
                isActive ? styles.filterButtonActive : styles.filterButtonOutline
            ]}
            onPress={() => onPress(status)}
            activeOpacity={0.7}
        >
            <Text style={[
                styles.filterButtonText,
                isActive ? styles.filterButtonTextActive : styles.filterButtonTextOutline
            ]}>{title}</Text>
        </TouchableOpacity>
    );
});

const AdmissionsScreen = () => {
    const navigation = useNavigation();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('todos');
    
    const [allAdmissionsData, setAllAdmissionsData] = useState(initialAdmissionsData);
    
    const admissions = useMemo(() => {
        const rawAdmissions = (allAdmissionsData || [])
            .filter(p => p.type === 'Admissão');

        return rawAdmissions.map(p => ({
            ...p,
            status: calculateProcessStatus(p)
        }));
    }, [allAdmissionsData]); 

    const filteredAdmissions = useMemo(() => {
        const lowerSearchTerm = searchTerm.toLowerCase().replace(/[^0-9a-z]/g, ''); 

        return admissions.filter(process => {
            const matchesSearch = 
                process.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                process.cpf.replace(/[^0-9]/g, '').includes(lowerSearchTerm);

            const processStatusLower = process.status ? process.status.toLowerCase() : '';
            const matchesStatus = filterStatus === 'todos' || processStatusLower === filterStatus;

            return matchesSearch && matchesStatus;
        });
    }, [admissions, searchTerm, filterStatus]); 

    const handleSetFilterStatus = useCallback((status) => {
        setFilterStatus(status);
    }, []);

    const handleSearchChange = useCallback((text) => {
        setSearchTerm(text);
    }, []);

    const handleProcessPress = useCallback((processId) => {
        navigation.navigate('ProcessDetails', { processId: processId }); 
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Admissões</Text>
            </View>

            <View style={styles.controlsContainer}>
                <View style={styles.filterButtonsContainer}>
                    {status_types.map(status => (
                        <FilterButton
                            key={status}
                            title={formatStatusTitle(status)}
                            status={status}
                            currentFilter={filterStatus}
                            onPress={handleSetFilterStatus}
                        />
                    ))}
                </View>

                <View style={styles.searchContainer}>
                    <Icon name="magnify" size={20} color={Colors.textLight} style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Pesquisar..."
                        placeholderTextColor={Colors.textLight}
                        value={searchTerm}
                        onChangeText={handleSearchChange}
                    />

                    {searchTerm.length > 0 && (
                        <TouchableOpacity onPress={() => setSearchTerm('')} style={styles.clearButton} activeOpacity={0.6}>
                            <Icon name="close-circle" size={20} color={Colors.textLight} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <FlatList
                data={filteredAdmissions}
                keyExtractor={item => String(item.id)} 
                renderItem={({ item }) => (
                    <ProcessCard
                        process={item}
                        onPress={() => handleProcessPress(item.id)}
                    />
                )}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Icon name="folder-open-outline" size={50} color={Colors.textLight} style={{ marginBottom: 10 }} />
                        <Text style={styles.emptyText}>Nenhum processo encontrado</Text>
                    </View>
                }
            />

            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate('Novo Colaborador')} 
                activeOpacity={0.8}
            >
                <Icon name="plus" size={30} color={Colors.white} />
            </TouchableOpacity>
        </View>
    );
};

export default AdmissionsScreen;