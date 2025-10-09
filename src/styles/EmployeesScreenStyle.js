import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#007AFF',
  secondary: '#FF9500', 
  success: '#34C759',
  danger: '#FF3B30',
  text: '#1C1C1E',
  textDark: '#4A4A4A', 
  textLight: '#8E8E93',
  border: '#E5E5EA',
  white: '#FFFFFF',
  background: '#F2F2F7',
  cardBackground: '#FFFFFF',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  header: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: Colors.cardBackground,
    borderBottomColor: Colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
  },

  controlsContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 15,
    backgroundColor: Colors.cardBackground,
  },

  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    padding: 3,
    width: '100%',
    borderColor: Colors.border,
    borderWidth: 1,
  },

  filterButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 1,
  },

  buttonBase: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },

  buttonPrimary: {
    backgroundColor: Colors.primary,
    borderWidth: 0,
  },

  buttonOutline: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 1,
  },

  buttonTextBase: {
    fontSize: 14,
    fontWeight: '600',
  },

  buttonTextPrimary: {
    color: Colors.white,
  },

  buttonTextOutline: {
    color: Colors.text,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: Colors.border,
    borderWidth: 1,
  },

  searchIcon: {
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    height: '100%',
    paddingVertical: 0,
    fontSize: 16,
    color: Colors.text,
  },

  listContent: {
    paddingBottom: 100,
    paddingTop: 5,
    paddingHorizontal: 20,
  },

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    marginTop: 30,
    marginHorizontal: 16,
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: Colors.textLight,
    fontWeight: '500',
  },

  card: {
    marginBottom: 10,
    padding: 15, 
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  employeeCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },

  employeeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    marginLeft: 10,
    flex: 1, 
  },

  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginLeft: 10,
  },

  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.white,
  },

  statusActive: {
    backgroundColor: Colors.success,
  },

  statusInactive: {
    backgroundColor: Colors.danger,
  },

  employeeCardDetails: {
    marginBottom: 15,
    paddingLeft: 40,
  },

  employeeInfo: {
    fontSize: 14,
    color: Colors.textDark,
    marginVertical: 2,
  },

  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    marginTop: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.border,
  },

  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },

  actionButtonText: {
    marginLeft: 4,
    color: Colors.primary,
    fontSize: 12,
    fontWeight: '600',
  },

  actionButtonTextDanger: {
    marginLeft: 4,
    color: Colors.danger,
    fontSize: 12,
    fontWeight: '600',
  },
});