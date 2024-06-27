import React, { useState, useRef, useEffect } from 'react';
import { View } from '@tarojs/components';
import { Divider } from "@antmjs/vantui";
import CarSkuCard from './CarSkuCard';

const Car: React.FC = () => {

  return <View>
    <Divider></Divider>
   <CarSkuCard />
  </View>
};

export default Car;