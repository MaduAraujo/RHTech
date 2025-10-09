import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity} from 'react-native';
import ProcessCard from '../components/processCard';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, styles } from '../styles/DashboardScreenStyle'; 

const DashboardScreen = () => {
    const navigation = useNavigation();
    
    const [allProcesses, setAllProcesses] = useState([]); 

    const admissions = allProcesses.filter((p) => p.type === 'Admissão');
    const demissions = allProcesses.filter((p) => p.type === 'Demissão');

    const pendingAdmissions = admissions.filter((p) => p.status === 'Pendente').length;
    const okAdmissions = admissions.filter((p) => p.status === 'OK').length;
    const totalAdmissions = admissions.length;

    const pendingDemissions = demissions.filter((p) => p.status === 'Pendente').length;
    const okDemissions = demissions.filter((p) => p.status === 'OK').length;
    const totalDemissions = demissions.length;

    const recentProcesses = allProcesses
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
        .slice(0, 3);

    const handleProcessPress = (processId, processType) => {
        navigation.navigate('ProcessDetail', { processId, processType });
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Dashboard</Text>
            
            <View style={styles.summaryContainer}>
                <TouchableOpacity
                    style={[styles.card, styles.summaryCard]}
                    onPress={() => navigation.navigate('Admissões')}>
                    <Text style={styles.summaryTitle}>Admissões</Text>
                    <Text style={styles.summaryNumber}>{totalAdmissions}</Text>
                    <View style={styles.summaryRow}>
                        <View style={styles.summaryStatusBadge}>
                            <Icon name="check" size={16} color={Colors.success} />
                            <Text
                                style={[styles.summaryStatusText, { color: Colors.success }]}>
                                {okAdmissions} OK
                            </Text>
                        </View>
                        <View style={styles.summaryStatusBadge}>
                            <Icon
                                name="alert-circle-outline"
                                size={16}
                                color={Colors.danger}
                            />
                            <Text
                                style={[styles.summaryStatusText, { color: Colors.danger }]}>
                                {pendingAdmissions} Pendente
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.card, styles.summaryCard]}
                    onPress={() => navigation.navigate('Demissões')}>
                    <Text style={styles.summaryTitle}>Demissões</Text>
                    <Text style={styles.summaryNumber}>{totalDemissions}</Text>
                    <View style={styles.summaryRow}>
                        <View style={styles.summaryStatusBadge}>
                            <Icon name="check" size={16} color={Colors.success} />
                            <Text
                                style={[styles.summaryStatusText, { color: Colors.success }]}>
                                {okDemissions} OK
                            </Text>
                        </View>
                        <View style={styles.summaryStatusBadge}>
                            <Icon
                                name="alert-circle-outline"
                                size={16}
                                color={Colors.danger}
                            />
                            <Text
                                style={[styles.summaryStatusText, { color: Colors.danger }]}>
                                {pendingDemissions} Pendente
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <Text style={styles.subtitle}>Alertas e Pendências</Text>
            <View style={styles.card}>
                {pendingAdmissions > 0 && (
                    <TouchableOpacity
                        style={styles.alertItem}
                        onPress={() => navigation.navigate('Admissões', { filterStatus: 'Pendente' })}>
                        <Icon name="alert-circle" size={20} color={Colors.danger} />
                        <Text style={[styles.alertText, { color: Colors.danger }]}>
                            {pendingAdmissions} Admissão(ões) com itens pendentes.
                        </Text>
                    </TouchableOpacity>
                )}
                {pendingDemissions > 0 && (
                    <TouchableOpacity
                        style={styles.alertItem}
                        onPress={() => navigation.navigate('Demissões', { filterStatus: 'Pendente' })}>
                        <Icon name="alert-circle" size={20} color={Colors.danger} />
                        <Text style={[styles.alertText, { color: Colors.danger }]}>
                            {pendingDemissions} Demissão(ões) com itens pendentes.
                        </Text>
                    </TouchableOpacity>
                )}
                {pendingAdmissions === 0 && pendingDemissions === 0 && (
                    <View style={styles.alertItem}>
                        <Icon
                            name="check-circle-outline"
                            size={20}
                            color={Colors.success}
                        />
                        <Text style={styles.alertText}>
                            Nenhum alerta ou pendência no momento
                        </Text>
                    </View>
                )}
            </View>

            <Text style={styles.subtitle}>Próximos Processos</Text>
            {recentProcesses.length > 0 ? (
                recentProcesses.map((process) => (
                    <ProcessCard
                        key={process.id}
                        process={process}
                        onPress={() => handleProcessPress(process.id, process.type)}
                    />
                ))
            ) : (
                <Text style={styles.emptyRecentText}>
                    Nenhum processo
                </Text>
            )}
        </ScrollView>
    );
};

export default DashboardScreen;