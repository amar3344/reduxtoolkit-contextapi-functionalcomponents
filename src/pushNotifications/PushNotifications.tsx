import { View, Text, PermissionsAndroid } from 'react-native'
import React, { useEffect } from 'react'
import messaging from "@react-native-firebase/messaging"
import { request,PERMISSIONS, openSettings, check } from 'react-native-permissions'

export default function PushNotifications() {

    const getFCMToken = async() => {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
            console.log('Your Firebase Token is:', fcmToken);
        } else {
            console.log('Failed', 'No token received');
        }
    }
    const requestPermmision = async() =>{
        await request(PERMISSIONS.ANDROID.RECEIVE_SMS)
    }

    const checkUserPermission = async () => {
        await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          )
    }

    const onNotificationOpenedAppFromQuit = async () => {
        const message = await messaging().getInitialNotification();
    
        if(message) {
          console.log('App opened from QUIT by tapping notification:', JSON.stringify(message));
        }
      };

      const listenToBackgroundNotifications = async () => {
        const unsubscribe = messaging().setBackgroundMessageHandler(
          async remoteMessage => {
            console.log(
              'A new message arrived! (BACKGROUND)',
              JSON.stringify(remoteMessage),
            );
          },
        );
        return unsubscribe;
      }

      const listenToForegroundNotifications = async () => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
          console.log(
            'A new message arrived! (FOREGROUND)',
            JSON.stringify(remoteMessage),
          );
        });
        return unsubscribe;
      }

      const onNotificationOpenedAppFromBackground = async () => {
        const unsubscribe = messaging().onNotificationOpenedApp(
          async remoteMessage => {
            console.log(
              'App opened from BACKGROUND by tapping notification:',
              JSON.stringify(remoteMessage),
            );
          },
        );
        return unsubscribe;
      };

    useEffect(() => {
        checkUserPermission ()
        const listenToNotifications = () => {
          try {
            getFCMToken();
            onNotificationOpenedAppFromQuit();
            listenToBackgroundNotifications();
            listenToForegroundNotifications();
            onNotificationOpenedAppFromBackground();
          } catch (error) {
            console.log(error);
          }
        };
    
        listenToNotifications();
      }, []);
  return (
    <View>
      <Text>PushNotifications</Text>
    </View>
  )
}