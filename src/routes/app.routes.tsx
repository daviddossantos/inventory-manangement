import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ProductsBottomBarParamList } from '../../types';
import Create from '../pages/Products/Create';
import Add from '../pages/Products/Add';
import Dashboard from '../pages/Products/Dashboard';
import Detail from '../pages/Products/Detail';
import ListProduct from '../pages/Products/ListProduct';
import Settings from '../pages/Products/Settings';
import ProductStackScreen from './product.routes';

function AppRoutes() {
  const TabStack = createBottomTabNavigator<ProductsBottomBarParamList>();

  return (
    <TabStack.Navigator
      backBehavior="order"
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: '#0080f6',
        inactiveTintColor: '#8E99AF',
        tabStyle: { backgroundColor: '#fff' },
        showLabel: false,
        keyboardHidesTabBar: true,
        style: { borderTopWidth: 0, elevation: 0, height: 60 },
      }}
    >
      <TabStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <TabStack.Screen
        name="ListProduct"
        component={ProductStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="box" size={25} color={color} />
          ),
        }}
      />
      <TabStack.Screen
        name="Add"
        component={Add}
        options={{
          tabBarVisible: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircle" size={25} color={color} />
          ),
        }}
      />
      <TabStack.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-bag" size={25} color={color} />
          ),
        }}
      />
      <TabStack.Screen
        name="Detail"
        component={Detail}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="graph" size={25} color={color} />
          ),
        }}
      />
    </TabStack.Navigator>
  );
}

export default AppRoutes;
