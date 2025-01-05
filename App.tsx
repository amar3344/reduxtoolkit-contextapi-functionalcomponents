/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import StopWatch from './src/StopWatch';
import { Provider, useSelector } from 'react-redux';
import store from "./src/redux/store"
import CreateContext from './src/context/CreateContex';
import NetworkCall from './src/networkcall/NetworkCall';
import PushNotifications from './src/pushNotifications/PushNotifications';
import messaging from "@react-native-firebase/messaging"

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  return (
    <StopWatch/>
  );
}

messaging().setBackgroundMessageHandler(async remoteMesssage =>{
  console.log("Killed state notifications",remoteMesssage)
})

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [count,setCounterValue] = useState<number>(0)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const incrementFunction = () =>{
    setCounterValue(prev => prev+1)
  }
  const decrementFunction = () =>{
    setCounterValue(prev => prev-1)
  }
  const decreaseByValue = (prop:number) =>{
    console.log("=======>prop",prop)
    setCounterValue(count-prop)
    // setCounterValue(prev => prev-prop)
  } 

  return (
    <PushNotifications/>
    // <NetworkCall/>
    // <CreateContext.Provider value={{
    //   count,
    //   incrementFunction:incrementFunction,
    //   decrementFunction:decrementFunction,
    //   decreaseByValue:decreaseByValue,
    // }}>
    //   <StopWatch/>
    // </CreateContext.Provider>
    // <Provider store={store}>
    //   <StopWatch/>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
