import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Alert, ActivityIndicator} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as DocumentPicker from 'expo-document-picker';
import { styles, Colors } from '../styles/DocumentFormerChecklistScreenStyle';

const TERMINATION_CHECKLIST = [
  'Termo de Rescisão de Contrato de Trabalho',
  'Baixa na Carteira de Trabalho',
  'Comprovante de Aviso Prévio',
  'Exame Demissional',
  'Guia de Saque FGTS',
  'Comprovante de Pagamento da Rescisão',
  'Entrega de Carta de Demissão',
];

const DocumentFormerChecklistScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const collaborator = route.params?.collaborator || {
    nomeCompleto: 'Nome do Colaborador',
  };

  const initialDocuments = TERMINATION_CHECKLIST.map((actionName, index) => ({
    id: `${index}`,
    name: actionName,
    status: 'Pendente',
    conclusionDate: null,
    notes: '',
    file: null,
  }));

  const [documents, setDocuments] = useState(initialDocuments);
  const [isPickingFile, setIsPickingFile] = useState(false);

  const handleStatusChange = (docId) => {
    setDocuments((prevDocs) =>
      prevDocs.map((doc) => {
        if (doc.id === docId) {
          const isCompleted = doc.status === 'Concluído';
          return {
            ...doc,
            status: isCompleted ? 'Pendente' : 'Concluído',
            conclusionDate: isCompleted
              ? null
              : new Date().toLocaleDateString('pt-BR'),
          };
        }
        return doc;
      })
    );
  };

  const handleNotesChange = (docId, text) => {
    setDocuments((prevDocs) =>
      prevDocs.map((doc) => (doc.id === docId ? { ...doc, notes: text } : doc))
    );
  };

  const handleAttachFile = async (docId) => {
    setIsPickingFile(true);

    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'image/*'],
        copyToCacheDirectory: true,
      });

      if (result.canceled || result.assets.length === 0) {
        console.log('Seleção de documento cancelada pelo usuário.');
        return;
      }

      const pickedFile = result.assets[0];
      const currentDate = new Date().toLocaleDateString('pt-BR');

      setDocuments((prevDocs) =>
        prevDocs.map((doc) => {
          if (doc.id === docId) {
            return {
              ...doc,
              file: pickedFile,
              status: 'Concluído',
              conclusionDate: currentDate,
            };
          }
          return doc;
        })
      );

      Alert.alert(
        'Arquivo Anexado',
        `O arquivo '${pickedFile.name}' foi anexado com sucesso.`
      );
    } catch (err) {
      console.error('Erro ao selecionar o documento:', err);
      Alert.alert('Erro', 'Falha ao selecionar o arquivo.');
    } finally {
      setIsPickingFile(false);
    }
  };

  const renderDocumentItem = ({ item }) => {
    const isCompleted = item.status === 'Concluído';
    const hasFile = !!item.file;

    return (
      <View style={styles.docItem}>
        <View style={styles.docHeader}>
          <Text style={styles.docName}>{item.name}</Text>
          <TouchableOpacity
            style={[
              styles.statusButton,
              { backgroundColor: isCompleted ? Colors.green : Colors.red },
            ]}
            onPress={() => handleStatusChange(item.id)}>
            <Icon
              name={isCompleted ? 'check-circle-outline' : 'clock-outline'}
              size={15}
              color={Colors.white}
            />
            <Text style={styles.statusButtonText}>
              {item.status === 'Concluído' ? 'OK' : 'PENDENTE'}
            </Text>
          </TouchableOpacity>
        </View>

        {isCompleted && item.conclusionDate && (
          <Text style={styles.dateText}>
            Concluído em: {item.conclusionDate}
          </Text>
        )}

        <TextInput
          style={styles.notesInput}
          placeholder="Observações..."
          value={item.notes}
          onChangeText={(text) => handleNotesChange(item.id, text)}
          multiline
        />

        {hasFile && (
          <View style={styles.fileDisplay}>
            <Icon name="file-check-outline" size={18} color={Colors.primary} />
            <Text style={styles.fileNameText} numberOfLines={1}>
              {item.file.name} - {(item.file.size / 1024 / 1024).toFixed(2)} MB
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={[
            styles.attachButton,
            isPickingFile && styles.attachButtonDisabled,
          ]}
          onPress={() => handleAttachFile(item.id)}
          disabled={isPickingFile}>
          {isPickingFile ? (
            <ActivityIndicator size="small" color={Colors.primary} />
          ) : (
            <>
              <Icon name="paperclip" size={18} color={Colors.primary} />
              <Text style={styles.attachButtonText}>
                {hasFile ? 'Substituir Arquivo' : 'Anexar Arquivo'}
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Ex Colaborador')}
          style={styles.backButton}>
          <Icon name="arrow-left" size={24} color={Colors.primary} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Checklist de Demissão</Text>
          <Text style={styles.subtitle}>
            {collaborator.nomeCompleto}
          </Text>
        </View>
      </View>
      <FlatList
        data={documents}
        renderItem={renderDocumentItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default DocumentFormerChecklistScreen;