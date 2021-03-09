import React from 'react';
import { DashboardProps } from '../../../../types';
import Screen from '../../../components/Screen';
import Header from '../../../components/Header';
import { ProductTitle } from './styled';

interface Product {
  product_name: string;
  description: string;
  url: string;
}

const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {
  return (
    <Screen>
      <ProductTitle>Dashboard</ProductTitle>
      <Header />
    </Screen>
  );
};

export default Dashboard;
