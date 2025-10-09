import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import {styles} from '../styles/InitialScreenStyle';

const dashboardOptions = [
  { name: 'Arquivos', icon: '📁', action: 'Arquivos' },
  { name: 'Admissão', icon: '🤝', action: 'Admissão' },
  { name: 'Demissão', icon: '🚪', action: 'Demissão' },
  { name: 'Dashboard', icon: '📊', action: 'Dashboard' },
  { name: 'Configuração', icon: '⚙️', action: 'Configuração' },
  { name: 'Colaboradores', icon: '🧑‍💼', action: 'Colaboradores' },
];

const InitialScreen = ({ navigation }) => {
  const handlePress = (action) => {
    navigation.navigate(action);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Painel de Controle</Text>
        <Text style={styles.subtitle}>Selecione uma opção para continuar</Text>

        <View style={styles.gridContainer}>
          {dashboardOptions.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => handlePress(item.action)}
              activeOpacity={0.7}
            >
              <Text style={styles.icon}>{item.icon}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InitialScreen;