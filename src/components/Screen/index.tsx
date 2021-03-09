import React, { Children } from 'react';
import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function Screen({ children }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            padding: 30,
            backgroundColor: '#fff',
            flex: 1,
          }}
        >
          {children}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
