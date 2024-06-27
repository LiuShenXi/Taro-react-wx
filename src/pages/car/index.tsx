import React, { useState, useRef, useEffect } from 'react';
import { View } from '@tarojs/components';
import { Divider, SubmitBar } from "@antmjs/vantui";
import CarSkuCard from './CarSkuCard';
import { beautyServices } from './service'

const Car: React.FC = () => {

  return <View>
    <Divider></Divider>
    {beautyServices.map(item => <CarSkuCard key={item.title} skuInfo={item} />)}
    <SubmitBar
      price={3050}
      buttonText="提交订单"
      onSubmit={() => console.info('提交')}
    />
  </View>
};

export default Car;