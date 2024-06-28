import React, { useState, useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import { Cell, Checkbox, SubmitBar } from "@antmjs/vantui";
import CarSkuCard from './CarSkuCard';
import { beautyServices } from './service';

import './index.less';

interface BeautyService {
  num: number;
  title: string;
  desc: string;
  price: string;
  isSelected?: boolean;
}

const Car: React.FC = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [items, setItems] = useState<BeautyService[]>(beautyServices.map(item => ({ ...item, isSelected: false })));
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // 更新合计金额
    const total = items.reduce((sum, item) => item.isSelected ? sum + item.num * parseFloat(item.price) : sum, 0);
    setTotalPrice(total);
  }, [items]);

  const setAll = (e) => {
    const selected: boolean = e.detail;
    setSelectAll(selected);
    setItems(items.map(item => ({ ...item, isSelected: selected })));
  };

  const handleItemSelect = (title, selected) => {
    setItems(prev => prev.map(item => item.title === title ? { ...item, isSelected: selected } : item));
  };

  const handleItemCountChange = (title, num) => {
    setItems(prev => prev.map(item => item.title === title ? { ...item, num: parseInt(num, 10) } : item));
  };

  const renderTitle = () => (
    <View className='title-wp'>
      <Checkbox value={selectAll} onChange={setAll} checkedColor="red" />
      <Text>全选</Text>
    </View>
  );

  return (
    <View>
      <Cell renderTitle={renderTitle()} />
      {items.map(item => (
        <CarSkuCard
          key={item.title}
          skuInfo={item}
          isSelected={item.isSelected ? true : false}
          onSelect={handleItemSelect}
          onCountChange={handleItemCountChange}
        />
      ))}
      <SubmitBar
        price={totalPrice * 100} // price in cents
        buttonText="提交订单"
        onSubmit={() => console.info('提交')}
      />
    </View>
  );
};

export default Car;
