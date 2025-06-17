// App.js
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Settings, User, Info } from 'lucide-react-native';

// Inicializa el Tab Navigator
const Tab = createBottomTabNavigator();

// Pantalla Home
function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Home Screen</Text>
      <Text style={styles.screenText}>Welcome to the main application view.</Text>
    </View>
  );
}

// Pantalla Settings
function SettingsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Settings</Text>
      <Text style={styles.screenText}>Adjust your preferences here.</Text>
    </View>
  );
}

// Pantalla Profile
function ProfileScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Profile</Text>
      <Text style={styles.screenText}>View and edit your profile.</Text>
    </View>
  );
}

// Pantalla About
function AboutScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>About</Text>
      <Text style={styles.screenText}>Information about this app.</Text>
    </View>
  );
}

// Componente principal
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let IconComponent;

            if (route.name === 'Home') {
              IconComponent = Home;
            } else if (route.name === 'Settings') {
              IconComponent = Settings;
            } else if (route.name === 'Profile') {
              IconComponent = User;
            } else if (route.name === 'About') {
              IconComponent = Info;
            }

            return <IconComponent color={color} size={size} />;
          },
          tabBarActiveTintColor: '#6200EE',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#ccc',
            height: Dimensions.get('window').height * 0.08,
            paddingBottom: Dimensions.get('window').height * 0.01,
            paddingTop: Dimensions.get('window').height * 0.01,
          },
          tabBarLabelStyle: {
            fontSize: Dimensions.get('window').width * 0.03,
            fontWeight: '600',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    padding: 20,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  screenText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
