import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#4CAF50', 
  secondary: '#FFC107', 
  accent: '#2196F3',   
  danger: '#F44336',   
  success: '#8BC34A', 
  text: '#333',
  textLight: '#777',
  background: '#f8f8f8',
  white: '#FFFFFF',
  border: '#ddd',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  title: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 10,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});