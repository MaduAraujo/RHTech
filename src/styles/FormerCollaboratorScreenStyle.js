import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  background: '#F2F2F7',
  cardBackground: '#FFFFFF',
  white: '#FFFFFF',
  textDark: 'black',
  textLight: '#8E8E93',
  border: '#E5E5EA',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  contentContainer: {
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: Colors.cardBackground,
    borderBottomColor: Colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 45,
  },

  backButton: {
    padding: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textDark,
    marginLeft: 10,
    flex: 1,
  },

  form: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  label: {
    color: Colors.textDark,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },

  input: {
    marginBottom: 12,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    borderColor: Colors.border,
    borderWidth: 1,
  },

  saveButton: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 15,
  },

  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});