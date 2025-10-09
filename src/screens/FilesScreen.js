import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput, Alert} from 'react-native';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, styles} from '../styles/FilesScreenStyles';

const mockProcesses = [];

const Icon = ({ name, size, color }) => {
  return <VectorIcon name={name} size={size} color={color} />;
};

const FilesScreen = () => {
  const [allFiles, setAllFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('Todos');
  const filterTypes = ['Todos', 'Admissão', 'Demissão', 'Outros'];

  useEffect(() => {
    const files = mockProcesses.flatMap((process) =>
      process.checklist
        .filter((item) => item.file)
        .map((item) => ({
          id: `${process.id}-${item.id}`,
          fileName: item.file.split('/').pop(),
          fileUri: item.file,
          processId: process.id,
          processName: process.name,
          processType: process.type,
          checklistItem: item.item,
          uploadedAt: new Date().toISOString(),
        }))
    );
    setAllFiles(files);
  }, []);

  const filteredFiles = allFiles.filter((file) => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    const matchesSearch =
      file.fileName.toLowerCase().includes(lowerSearchTerm) ||
      file.processName.toLowerCase().includes(lowerSearchTerm) ||
      file.checklistItem.toLowerCase().includes(lowerSearchTerm);

    const matchesType =
      filterType === 'Todos' || file.processType === filterType;
    return matchesSearch && matchesType;
  });

  const renderFileItem = ({ item }) => (
    <View style={[styles.card, screenStyles.fileItem]}>
      <TouchableOpacity
        onPress={() => handleOpenFile(item.fileUri)}
        style={screenStyles.fileInfo}>
        <Icon name="file-document-outline" size={30} color={Colors.primary} />

        <View style={styles.fileDetails}>
          <Text style={styles.fileName} numberOfLines={1}>
            {item.fileName}
          </Text>

          <Text style={styles.fileContext} numberOfLines={1}>
            {item.processType} de {item.processName} ({item.checklistItem})
          </Text>

          <Text style={styles.fileDate}>
            Upload: {new Date(item.uploadedAt).toLocaleDateString('pt-BR')}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Alert.alert('Opções', `Opções para ${item.fileName}`)}
        style={styles.optionsButton}>
        <Icon name="dots-vertical" size={24} color={Colors.textLight} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Documentos e Arquivos</Text>
      </View>

      <View style={styles.controlsContainer}>
        <View style={styles.filterButtonsContainer}>
          {filterTypes.map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.filterButton,
                filterType === type && styles.filterButtonActive,
              ]}
              onPress={() => setFilterType(type)}>
              <Text
                style={[
                  styles.filterButtonText,
                  filterType === type && styles.filterButtonTextActive,
                ]}>
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.searchContainer}>
          <Icon
            name="magnify"
            size={20}
            color={Colors.textLight}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar..."
            placeholderTextColor={Colors.textLight}
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          {searchTerm.length > 0 && (
            <TouchableOpacity
              onPress={() => setSearchTerm('')}
              style={styles.clearSearchButton}>
              <Icon name="close-circle" size={20} color={Colors.textLight} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <FlatList
        data={filteredFiles}
        keyExtractor={(item) => item.id}
        renderItem={renderFileItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View
            style={styles.emptyContainer}>
            <Icon
              name="folder-open-outline"
              size={50}
              color={Colors.textLight}
              style={{ marginBottom: 10 }}
            />
            <Text style={styles.emptyText}>
              Nenhum arquivo encontrado
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default FilesScreen;