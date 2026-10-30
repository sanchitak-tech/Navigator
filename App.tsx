import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function HomeScreen() {
  return <Screen title="Home Screen" message="Welcome to the Home page!" />;
}

function ProfileScreen() {
  return <Screen title="Profile Screen" message="This is your Profile." />;
}

function SettingsScreen() {
  return <Screen title="Settings Screen" message="Manage your settings here." />;
}

function AboutScreen() {
  return <Screen title="About Screen" message="Experiment 8: React Navigation." />;
}

function Screen({ title, message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

// Bottom tab navigation
function BottomTabs() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
      <BottomTab.Screen name="Settings" component={SettingsScreen} />
    </BottomTab.Navigator>
  );
}

// Material top tab navigation
function TopTabs() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Home" component={HomeScreen} />
      <TopTab.Screen name="Profile" component={ProfileScreen} />
      <TopTab.Screen name="Settings" component={SettingsScreen} />
    </TopTab.Navigator>
  );
}

// Drawer navigation
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Bottom Tabs">
        <Drawer.Screen
          name="Bottom Tabs"
          component={BottomTabs}
        />
        <Drawer.Screen
          name="Top Tabs"
          component={TopTabs}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f6ff',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#234a91',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
  },
});