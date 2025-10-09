import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  background: '#F2FF7',
  cardBackground: '#FFFFFF',
  white: '#FFFFFF',
  textDark: 'black',
  textLight: '#8E8E93',
  border: '#E5E5EA',
  lightGray: '#EFEFF4',
  green: '#34C759',
  red: '#FF3B30',
  text: 'black',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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
  },

  subtitle: {
    fontSize: 14,
    color: Colors.textLight,
    marginLeft: 10,
  },

  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    paddingTop: 30,
  },
  
  docItem: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },

  docHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  docName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
    flex: 1,
    marginRight: 10,
  },

  statusButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 15,
    minWidth: 100,
    justifyContent: 'center',
  },

  statusButtonText: {
    color: Colors.white,
    marginLeft: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },

  dateText: {
    fontSize: 12,
    color: Colors.textLight,
    fontStyle: 'italic',
    marginBottom: 10,
  },

  notesInput: {
    backgroundColor: Colors.background,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 10,
    minHeight: 50,
    textAlignVertical: 'top',
    marginBottom: 10,
    fontSize: 14,
    color: Colors.textDark,
  },

  attachButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    marginTop: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
  },

  attachButtonDisabled: {
    opacity: 0.6,
    backgroundColor: Colors.background,
  },

  attachButtonText: {
    color: Colors.primary,
    marginLeft: 8,
    fontWeight: '600',
  },

  fileDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: Colors.lightGray,
    borderRadius: 6,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: Colors.green,
  },

  fileNameText: {
    marginLeft: 8,
    fontSize: 14,
    color: Colors.textDark,
    flexShrink: 1,
  },
});