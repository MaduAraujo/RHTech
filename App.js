import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import InitialScreen from './src/screens/InitialScreen';
import FilesScreen from './src/screens/FilesScreen';
import AdmissionsScreen from './src/screens/admissionsScreen';
import NewCollaboratorScreen from './src/screens/NewCollaboratorScreen';
import DocumentNewChecklistScreen from './src/screens/DocumentNewChecklistScreen';
import DemissionsScreen from './src/screens/DemissionsScreen';
import FormerCollaboratorScreen from './src/screens/FormerCollaboratorScreen';
import DocumentFormerChecklistScreen from './src/screens/DocumentFormerChecklistScreen';
import DashboardScreen from './src/screens/dashboardScreen';
import EmployeesScreen from './src/screens/EmployeesScreen';
import SettingsScreen from './src/screens/SettingsScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
        <Stack.Screen name="Login" component={LoginScreen} /> 
        <Stack.Screen name="Tela Inicial" component={InitialScreen} /> 
        <Stack.Screen name="Arquivos" component={FilesScreen} /> 

        <Stack.Screen name="Admissão" component={AdmissionsScreen} />
        <Stack.Screen name="Novo Colaborador" component={NewCollaboratorScreen} />
        <Stack.Screen name="Checklist Entrada" component={DocumentNewChecklistScreen} />

        
        <Stack.Screen name="Demissão" component={DemissionsScreen} />
        <Stack.Screen name="Ex Colaborador" component={FormerCollaboratorScreen} />
        <Stack.Screen name="Checklist Saída" component={DocumentFormerChecklistScreen} />

        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Colaboradores" component={EmployeesScreen} />
        <Stack.Screen name="Configuração" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}