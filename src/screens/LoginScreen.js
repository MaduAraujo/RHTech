import React, { useState, useRef } from 'react';
import {Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform,SafeAreaView, Image} from 'react-native';
import {styles} from '../styles/LoginScreenStyle';
import logo from '../assets/logo.jpeg';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordInputRef = useRef(null);

  const goToInitialScreen = () => {
    navigation.navigate('Tela Inicial');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20} 
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headerContainer}>
            <Image
             source={logo}
             style={styles.logo}
            />
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.label}>EMAIL</Text>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="seuemail@exemplo.com"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#a0a0a0"
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
              blurOnSubmit={false}
            />

            <Text style={styles.label}>SENHA</Text>
            <TextInput
              ref={passwordInputRef}
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="********"
              secureTextEntry={true}
              placeholderTextColor="#a0a0a0"
              returnKeyType="done"
              onSubmitEditing={goToInitialScreen}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={goToInitialScreen}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}