import React from 'react';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';
import { Alert, Text } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

Permissions.getAsync(Permissions.USER_FACING_NOTIFICATIONS)
  .then(permission => {
    Alert.alert(JSON.stringify(permission));
    Notifications.scheduleNotificationAsync({
      content: {
          title: 'Hello',
          subtitle: 'world',
      },
      trigger: {
          seconds: 10,
      }
    });
  })

export const App = () => {
  return <Text>Hello World</Text>
}

export default App;
