import React, { useState, useMemo, useCallback } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { styles, Colors } from '../styles/DemissionsScreenStyle'; 
import ProcessCard from '../components/processCard';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const calculateProcessStatus = (process) => {
    if (!process.checklist || !Array.isArray(process.checklist) || process.checklist.length === 0) {
        return 'em processo';
    }
    const isAllComplete = process.checklist.every(item => item.isComplete === true);
    return isAllComplete ? 'concluído' : 'em processo'; 
};

const status_types = ['todos', 'concluído', 'em processo'];

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

const DemissionsScreen = () => {
    const navigation = useNavigation();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('todos');

    const demissions = useMemo(() => {
        const realDemissionsData = []; 

        return realDemissionsData.map(p => ({
            ...p,
            status: calculateProcessStatus(p)
        }));
    }, []);

    const filteredDemissions = useMemo(() => {
        const lowerSearchTerm = searchTerm.toLowerCase();

        return demissions.filter(process => {
            const matchesSearch = process.name.toLowerCase().includes(lowerSearchTerm) ||
                process.cpf.replace(/[^0-9]/g, '').includes(lowerSearchTerm.replace(/[^0-9]/g, ''));

            const processStatusLower = process.status ? process.status.toLowerCase() : '';
            const matchesStatus = filterStatus === 'todos' || processStatusLower === filterStatus;
            
            return matchesSearch && matchesStatus;
        });
    }, [demissions, searchTerm, filterStatus]); 

    const handleSetFilterStatus = useCallback((status) => {
        setFilterStatus(status);
    }, []);

    const handleSearchChange = useCallback((text) => {
        setSearchTerm(text);
    }, []);
    
    const handleProcessPress = (item) => {
        navigation.navigate('ProcessDetail', { processId: item.id, processType: 'Demissão' });
    };

    const formatStatusTitle = (status) => {
        if (!status) return '';
        return status.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Demissões</Text>
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
                data={filteredDemissions}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <ProcessCard
                        process={item}
                        onPress={() => handleProcessPress(item)}
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
                onPress={() => navigation.navigate('Ex Colaborador', { processType: 'Demissão' })}
                activeOpacity={0.8}
            >
                <Icon name="plus" size={30} color={Colors.white} />
            </TouchableOpacity>
        </View>
    );
};

export default DemissionsScreen;