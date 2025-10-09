import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', 
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 50,
    textAlign: 'center',
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', 
  },

  card: {
    width: '48%', 
    minHeight: 140,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },

  icon: {
    fontSize: 42,
    marginBottom: 10,
  },

  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A202C',
    textAlign: 'center',
  },
});