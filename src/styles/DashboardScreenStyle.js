import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#007AFF', 
  secondary: '#5856D6', 
  success: '#34C759', 
  danger: '#FF0000',
  background: '#F2F2F7', 
  cardBackground: '#FFFFFF', 
  white: '#FFFFFF', 
  border: '#E5E5EA', 
  textDark: 'black', 
  textLight: '#8E8E93', 
};

export const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'white',
  },

  contentContainer: {
    padding: 20,
    paddingBottom: 80,
  },

  title: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },

  card: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },

  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  summaryCard: {
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  summaryTitle: {
    fontSize: 16,
    color: Colors.textLight,
    marginBottom: 8,
    fontWeight: '700',
  },

  summaryNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.textDark,
    marginBottom: 10,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 5,
  },

  summaryStatusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },

  summaryStatusText: {
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 4,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textDark, 
    marginBottom: 10,
    marginTop: 15,
  },

  alertItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 5,
  },
  
  alertText: {
    marginLeft: 10,
    color: Colors.textDark,
    fontSize: 14,
    flexShrink: 1,
  },

  emptyRecentText: {
    textAlign: 'center',
    marginTop: 10,
    color: Colors.textLight,
    fontSize: 15,
  },
});