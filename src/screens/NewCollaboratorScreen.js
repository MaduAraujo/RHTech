import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles, Colors } from '../styles/NewCollaboratorScreenStyle'; 

const formatCPF = (text) => {
    let cleaned = text.replace(/\D/g, '');
    let formatted = '';

    if (cleaned.length > 0) {
        formatted = cleaned.substring(0, 3);
    }
    if (cleaned.length > 3) {
        formatted += '.' + cleaned.substring(3, 6);
    }
    if (cleaned.length > 6) {
        formatted += '.' + cleaned.substring(6, 9);
    }
    if (cleaned.length > 9) {
        formatted += '-' + cleaned.substring(9, 11);
    }
    return formatted;
};

const formatDate = (text) => {
    let cleaned = text.replace(/\D/g, '');
    let formatted = '';

    if (cleaned.length > 0) {
        formatted = cleaned.substring(0, 2);
    }
    if (cleaned.length > 2) {
        formatted += '/' + cleaned.substring(2, 4);
    }
    if (cleaned.length > 4) {
        formatted += '/' + cleaned.substring(4, 8);
    }
    return formatted;
};

const NewCollaboratorScreen = () => {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        cpf: '',
        dataNascimento: '',
        cargo: '',
        departamento: '',
        dataAdmissao: '',
    });

    const handleInputChange = (field, value) => {
        let formattedValue = value;

        if (field === 'cpf') {
            formattedValue = formatCPF(value);
        } else if (field === 'dataNascimento' || field === 'dataAdmissao') {
            formattedValue = formatDate(value);
        }

        setFormData(prev => ({ ...prev, [field]: formattedValue }));
    };

    const handleSave = () => {
        const fieldNames = {
            nomeCompleto: 'Nome Completo',
            cpf: 'CPF',
            dataNascimento: 'Data de Nascimento',
            cargo: 'Cargo',
            departamento: 'Departamento',
            dataAdmissao: 'Data de Admissão Prevista',
        };
        
        for (const key in formData) {
            if (formData[key].trim() === '') {
                Alert.alert('Campo Obrigatório', `Por favor, preencha o campo "${fieldNames[key]}"`);
                return;
            }
        }

        const newCollaborator = {
            id: Date.now().toString(),
            ...formData
        };

        navigation.navigate('Checklist Entrada', { collaborator: newCollaborator });
    };

    const navigateToNewCollaborator = () => {
        navigation.navigate('Novo Colaborador');
    };


    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Admissão')} 
                    style={styles.backButton}
                >
                    <Icon name="arrow-left" size={24} color={Colors.primary} />
                </TouchableOpacity>
                <Text style={styles.title}>Novo Colaborador</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.label}>Nome Completo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome completo"
                    value={formData.nomeCompleto}
                    onChangeText={(text) => handleInputChange('nomeCompleto', text)}
                />

                <Text style={styles.label}>CPF</Text>
                <TextInput
                    style={styles.input}
                    placeholder="000.000.000-00"
                    keyboardType="numeric"
                    maxLength={14}
                    value={formData.cpf}
                    onChangeText={(text) => handleInputChange('cpf', text)}
                />

                <Text style={styles.label}>Data de Nascimento</Text>
                <TextInput
                    style={styles.input}
                    placeholder="DD/MM/AAAA"
                    keyboardType="numeric"
                    maxLength={10}
                    value={formData.dataNascimento}
                    onChangeText={(text) => handleInputChange('dataNascimento', text)}
                />

                <Text style={styles.label}>Cargo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Desenvolvedor"
                    value={formData.cargo}
                    onChangeText={(text) => handleInputChange('cargo', text)}
                />

                <Text style={styles.label}>Departamento</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: T.I"
                    value={formData.departamento}
                    onChangeText={(text) => handleInputChange('departamento', text)}
                />

                <Text style={styles.label}>Data de Admissão Prevista</Text>
                <TextInput
                    style={styles.input}
                    placeholder="DD/MM/AAAA"
                    keyboardType="numeric"
                    maxLength={10}
                    value={formData.dataAdmissao}
                    onChangeText={(text) => handleInputChange('dataAdmissao', text)}
                />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Salvar e ir para Checklist</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default NewCollaboratorScreen;