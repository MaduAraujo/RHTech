import { StyleSheet} from 'react-native';

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
  
  title: {
    marginTop: 40, 
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6, 
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },

  header: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: Colors.cardBackground,
    borderBottomColor: Colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth, 
  },

  controlsContainer: {
    backgroundColor: Colors.cardBackground,
    paddingHorizontal: 20,
    marginBottom: 15, 
    paddingTop: 10,
  },
  
  filterButtonsContainer: {
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

  filterButtonOutline: {
    backgroundColor: 'transparent',
  },
  
  filterButtonActive: {
    backgroundColor: Colors.primary,
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },

  filterButtonText: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  
  filterButtonTextOutline: {
    color: Colors.textDark, 
  },

  filterButtonTextActive: {
    color: Colors.white,
    fontWeight: '700',
  },

  searchContainer: {
    marginBottom: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    borderColor: Colors.border,
    borderWidth: 1,
  },

  searchIcon: {
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.textDark,
    paddingVertical: 0,
    height: '100%',
  },

  clearButton: {
    marginLeft: 8,
    padding: 5,
  },

  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    paddingTop: 5,
  },

  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30, 
    padding: 30,
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
});