import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  white: '#FFFFFF',
  background: '#F2F2F7', 
  cardBackground: '#FFFFFF', 
  textDark: 'black', 
  textLight: '#8E8E93',
  border: '#E5E5EA',
  success: '#34C759', 
  danger: '#FF3B30',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textDark,
  },

  card: {
    marginHorizontal: 16,
    marginBottom: 8,
    padding: 12,
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    elevation: 2, 
    shadowColor: Colors.textDark,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  
  header: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: Colors.cardBackground,
    borderBottomColor: Colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  controlsContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 15,
    backgroundColor: Colors.cardBackground,
  },

  filterButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 3,
    width: '100%',
    borderColor: Colors.border,
    borderWidth: 1,
    backgroundColor: Colors.cardBackground,
  },
  
  filterButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 1, 
  },

  filterButtonActive: {
    backgroundColor: Colors.primary,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  filterButtonText: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.textDark,
  },

  filterButtonTextActive: {
    fontWeight: '700',
    color: Colors.white,
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
    color: Colors.textDark,
  },

  clearSearchButton: {
    marginLeft: 8,
    padding: 5,
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

  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },

  fileInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },

  fileDetails: {
    flex: 1,
    marginLeft: 10,
  },

  fileName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 2,
  },

  fileContext: {
    fontSize: 13,
    color: Colors.textLight,
  },

  fileDate: {
    fontSize: 12,
    color: Colors.textLight,
    marginTop: 4,
  },

  optionsButton: {
    paddingLeft: 10,
    paddingVertical: 5,
  },
});