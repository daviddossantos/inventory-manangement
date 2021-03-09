import { FuegoProvider } from '@nandorojo/swr-firestore';
import { StatusBar } from 'expo-status-bar';
import 'firebase/auth';
import 'firebase/firestore';
import React from 'react';
import 'react-native-gesture-handler';
import { RecoilRoot } from 'recoil';
import Routes from './src/routes';
import { fuego } from './src/config/Fuego';

export default function App() {
  return (
    <FuegoProvider fuego={fuego}>
      <RecoilRoot>
        <Routes />
        <StatusBar style="dark" translucent={false} backgroundColor="white" />
      </RecoilRoot>
    </FuegoProvider>
  );
}
