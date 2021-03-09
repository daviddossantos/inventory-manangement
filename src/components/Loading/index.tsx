import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loading = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <ActivityIndicator size="small" color="#0080f6" />
    </View>
  );
};

export default Loading;
