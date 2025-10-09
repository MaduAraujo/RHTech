import {StyleSheet} from 'react-native';

export const Colors = {
  primary: '#007AFF',      
  secondary: '#5856D6',
  background: '#F2F2F7',    
  cardBackground: '#FFFFFF', 
  white: '#FFFFFF',
  textDark: '#1C1C1E',      
  textLight: '#8E8E93',     
  border: '#E5E5EA',        
  error: '#FF3B30',     
  success: '#34C759',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.textDark,
    marginBottom: 25,
    marginTop: 60,
    paddingHorizontal: 20,
  },
  
  listWrapper: {
    paddingHorizontal: 15,
  },

  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2, 
    shadowColor: Colors.textDark, 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  
  settingIcon: {
    marginRight: 15,
  },

  settingTextContainer: {
    flex: 1,
  },

  settingTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: Colors.textDark,
  },

  settingDescription: {
    fontSize: 13,
    color: Colors.textLight,
    marginTop: 2,
  },

  logoutButton: {
    backgroundColor: Colors.error,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    elevation: 2,
    shadowColor: Colors.textDark,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  logoutButtonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
  },

  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 30,
  },

  footerText: {
    fontSize: 12,
    color: Colors.textLight,
    marginTop: 5,
  },
});