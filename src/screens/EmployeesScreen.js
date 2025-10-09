import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles, Colors } from '../styles/EmployeesScreenStyle'; 

const FilterButton = ({ title, onPress, isSelected }) => (
  <TouchableOpacity
    style={[
      styles.filterButton,
      isSelected ? styles.buttonPrimary : styles.buttonOutline,
    ]}
    onPress={onPress}
  >
    <Text
      style={[
        styles.buttonTextBase,
        isSelected ? styles.buttonTextPrimary : styles.buttonTextOutline,
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

const EmployeeCard = ({ employee, onPressDetails, onPressEdit, onPressResignation }) => {
  const formattedAdmissionDate = employee.admissionDate; 
  const statusStyle = employee.status === 'Ativo' ? styles.statusActive : styles.statusInactive;

  return (
    <View style={styles.card}>
      <View style={styles.employeeCardHeader}>
        <Icon name="account-circle" size={30} color={Colors.primary} />
        <Text style={styles.employeeName}>{employee.name}</Text>
        <View style={[styles.statusBadge, statusStyle]}>
          <Text style={styles.statusText}>{employee.status}</Text>
        </View>
      </View>

      <View style={styles.employeeCardDetails}>
        <Text style={styles.employeeInfo}>
          <Text style={styles.employeeInfoLabel}>Cargo:</Text> {employee.jobTitle || 'N/A'}
        </Text>
        <Text style={styles.employeeInfo}>
          <Text style={styles.employeeInfoLabel}>Departamento:</Text> {employee.department || 'N/A'}
        </Text>
        <Text style={styles.employeeInfo}>
          <Text style={styles.employeeInfoLabel}>Admissão:</Text> {formattedAdmissionDate || 'N/A'}
        </Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => onPressDetails(employee.cpf)}
        >
          <Icon name="eye-outline" size={18} color={Colors.primary} />
          <Text style={styles.actionButtonText}>Detalhes</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => onPressEdit(employee.cpf)}
        >
          <Icon name="pencil-outline" size={18} color={Colors.secondary} />
          <Text style={styles.actionButtonText}>Editar</Text>
        </TouchableOpacity>

        {employee.status === 'Ativo' && (
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={() => onPressResignation(employee.cpf)}
          >
            <Icon name="exit-run" size={18} color={Colors.danger} />
            <Text style={styles.actionButtonTextDanger}>Demissão</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const EmployeesScreen = ({ navigation }) => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('Todos');

  const navigateToDetails = (cpf) => {
    navigation.navigate('EmployeeDetails', { cpf });
  };
  const navigateToEdit = (cpf) => {
    navigation.navigate('EmployeeEdit', { cpf });
  };
  const navigateToResignation = (cpf) => {
    navigation.navigate('ResignationStart', { cpf }); 
  };

  const filteredEmployees = employees.filter((employee) => {
    const nameToCompare = employee.name || '';
    const cpfToCompare = employee.cpf || '';

    const matchesSearch =
      nameToCompare.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cpfToCompare.includes(searchTerm);

    const statusToCompare = employee.status || '';
    const matchesStatus =
      filterStatus === 'Todos' || statusToCompare === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Colaboradores</Text>
      </View>

      <View style={styles.controlsContainer}>
        <View style={styles.filterButtons}>
          {['Todos', 'Ativo', 'Inativo'].map((status) => (
            <FilterButton
              key={status}
              title={status}
              onPress={() => setFilterStatus(status)}
              isSelected={filterStatus === status}
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
            onChangeText={setSearchTerm}
          />
        </View>
      </View>

      <FlatList
        data={filteredEmployees}
        keyExtractor={(item) => item.cpf}
        renderItem={({ item }) => (
          <EmployeeCard 
            employee={item} 
            onPressDetails={navigateToDetails} 
            onPressEdit={navigateToEdit}
            onPressResignation={navigateToResignation} 
          />
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Icon name="account-off-outline" size={50} color={Colors.textLight} style={{ marginBottom: 10 }} />
            <Text style={styles.emptyText}>Nenhum colaborador encontrado</Text>
          </View>
        }
      />
    </View>
  );
};

export default EmployeesScreen;