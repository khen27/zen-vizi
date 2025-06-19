import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, Image, View } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// Custom tab bar icon component with blue dot indicator
function CustomTabBarIcon({ focused }: { focused: boolean }) {
  return (
    <View style={{ alignItems: 'center', height: 38, justifyContent: 'space-between' }}>
      <Image
        source={require('@/assets/tab-button-messages.png')}
        style={{ width: 28, height: 28, tintColor: '#4694FD' }}
      />
      <View
        style={{
          width: 6,
          height: 6,
          borderRadius: 3,
          backgroundColor: focused ? '#4694FD' : 'transparent',
        }}
      />
    </View>
  );
}

// Matches tab bar icon component
function MatchesTabBarIcon({ focused }: { focused: boolean }) {
  return (
    <View style={{ alignItems: 'center', height: 38, justifyContent: 'space-between' }}>
      <Image
        source={require('@/assets/tab-button-matches.png')}
        style={{ width: 28, height: 28, tintColor: '#4694FD' }}
      />
      <View
        style={{
          width: 6,
          height: 6,
          borderRadius: 3,
          backgroundColor: focused ? '#4694FD' : 'transparent',
        }}
      />
    </View>
  );
}

// Notifications tab bar icon component
function NotificationsTabBarIcon({ focused }: { focused: boolean }) {
  return (
    <View style={{ alignItems: 'center', height: 38, justifyContent: 'space-between' }}>
      <Image
        source={require('@/assets/tab-button-notifications.png')}
        style={{ width: 28, height: 28, tintColor: '#4694FD' }}
      />
      <View
        style={{
          width: 6,
          height: 6,
          borderRadius: 3,
          backgroundColor: focused ? '#4694FD' : 'transparent',
        }}
      />
    </View>
  );
}

// Profile tab bar icon component
function ProfileTabBarIcon({ focused }: { focused: boolean }) {
  return (
    <View style={{ alignItems: 'center', height: 38, justifyContent: 'space-between' }}>
      <Image
        source={require('@/assets/tab-button-profile.png')}
        style={{ width: 28, height: 28, tintColor: '#4694FD' }}
      />
      <View
        style={{
          width: 6,
          height: 6,
          borderRadius: 3,
          backgroundColor: focused ? '#4694FD' : 'transparent',
        }}
      />
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ focused }) => <CustomTabBarIcon focused={focused} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ focused }) => <MatchesTabBarIcon focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Tab Three',
          tabBarIcon: ({ focused }) => <NotificationsTabBarIcon focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <ProfileTabBarIcon focused={focused} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
