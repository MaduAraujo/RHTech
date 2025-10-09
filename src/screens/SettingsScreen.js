import React, { useState } from 'react';
import {View, Text, Switch, TouchableOpacity, Alert, ScrollView, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import {Colors, styles} from '../styles/SettingsScreenStyle';

const SettingsScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [fingerprintLoginEnabled, setFingerprintLoginEnabled] = useState(false);

  const handleLogout = async () => {
    Alert.alert(
      'Sair',
      'Tem certeza de que deseja sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('userToken');
              console.log('Token de usuário removido do AsyncStorage.');

              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: 'Login' }],
                })
              );
              console.log('Navegado para a tela de Login.');

            } catch (error) {
              console.error('Erro ao sair:', error);
              Alert.alert('Erro', 'Ocorreu um erro ao tentar sair. Por favor, tente novamente.');
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  const renderSettingItem = (
    iconName,
    title,
    description,
    onPress,
    isSwitch = false,
    switchValue = false,
    onSwitchChange = () => {}
  ) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress} disabled={isSwitch}>
      <Ionicons 
        name={iconName} 
        size={24} 
        color={Colors.textDark} 
        style={styles.settingIcon} 
      />
      <View style={styles.settingTextContainer}>
        <Text style={styles.settingTitle}>{title}</Text>
        {description && <Text style={styles.settingDescription}>{description}</Text>}
      </View>
      {isSwitch ? (
        <Switch
          trackColor={{ false: Colors.border, true: Colors.primary }}
          thumbColor={Colors.white} 
          ios_backgroundColor={Colors.border} 
          onValueChange={onSwitchChange}
          value={switchValue}
        />
      ) : (
        <Ionicons 
          name="chevron-forward" 
          size={20} 
          color={Colors.textLight} 
        />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <ScrollView contentContainerStyle={styles.listWrapper}>
        {renderSettingItem(
          'notifications-outline',
          'Notificações',
          'Receber alertas sobre novos processos e documentos.',
          null,
          true,
          notificationsEnabled,
          setNotificationsEnabled
        )}

        {renderSettingItem(
          'moon-outline',
          'Modo Escuro',
          'Ativar tema escuro para o aplicativo.',
          null,
          true,
          darkModeEnabled,
          setDarkModeEnabled
        )}

        {renderSettingItem(
          'finger-print-outline',
          'Login com Impressão Digital',
          'Usar sua impressão digital para login rápido.',
          null,
          true,
          fingerprintLoginEnabled,
          setFingerprintLoginEnabled
        )}

        {renderSettingItem(
          'lock-closed-outline',
          'Mudar Senha',
          'Atualizar sua senha de acesso.',
          () => Alert.alert('Navegar', 'Ir para tela de mudança de senha') 
        )}

        {renderSettingItem(
          'document-text-outline',
          'Termos de Serviço',
          'Ler nossos termos e condições.',
          () => Alert.alert('Navegar', 'Ir para tela de Termos de Serviço')
        )}

        {renderSettingItem(
          'information-circle-outline',
          'Sobre o Aplicativo',
          'Informações sobre a versão do aplicativo.',
          () => Alert.alert('Navegar', 'Ir para tela Sobre o Aplicativo')
        )}

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Versão 1.0.0</Text>
          <Text style={styles.footerText}>© 2025 RHTech. Todos os direitos reservados.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;