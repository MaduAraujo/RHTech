import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 40,
  },

  headerContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },

  headerText: {
    fontSize: 34,
    fontWeight: '600',
    color: '#007bff',
  },

  formContainer: {
    width: '100%',
  },

  label: {
    fontSize: 13,
    color: '#333',
    marginTop: 17,
    marginBottom: 6,
    fontWeight: '600',
  },

  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    width: '100%',
  },

  button: {
    width: '100%',
    height: 55,
    marginTop: 50,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2, 
    shadowRadius: 5,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },

  logo: {
    width: 160,
    height: 150,
    resizeMode: 'contain', 
    alignSelf: 'center',
  },
});