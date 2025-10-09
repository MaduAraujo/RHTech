import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../styles/globalStyles' 

const processCard = ({ process, onPress }) => {
  
    const getStatusInfo = (status) => {
        switch (status) {
            case 'OK':
                return { 
                    iconName: 'check-circle-outline', 
                    color: Colors.success,
                    label: 'Concluído'
                };
            case 'Pendente':
                return { 
                    iconName: 'alert-circle-outline', 
                    color: Colors.warning,
                    label: 'Pendente'
                };
            default:
                return { 
                    iconName: 'progress-question', 
                    color: Colors.textLight,
                    label: 'Em processo'
                };
        }
    };

    const statusInfo = getStatusInfo(process.status);

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => onPress(process.id)} 
            activeOpacity={0.7} 
        >
            <View style={styles.content}>
                <Text style={styles.title} numberOfLines={1}>
                    {process.name}
                </Text>
              
                <Text style={styles.subtitle}>
                    CPF: {process.cpf}
                </Text>
            </View>

            <View style={styles.statusContainer}>
                <Icon 
                    name={statusInfo.iconName} 
                    size={24} 
                    color={statusInfo.color} 
                />
                <Text style={[styles.statusText, { color: statusInfo.color }]}>
                    {statusInfo.label}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        // Sombreamento profissional (compatível com iOS e Android)
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5, 
    },
    content: {
        flex: 1, // Permite que o conteúdo ocupe o espaço restante
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.textLight,
    },
    statusContainer: {
        alignItems: 'center',
        paddingLeft: 10,
        borderLeftWidth: 1,
        borderLeftColor: Colors.border,
    },
    statusText: {
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 2,
    }
});

export default processCard;