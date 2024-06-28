import React, { useState, useEffect } from "react";
import { Card } from "@antmjs/vantui";
import { View } from "@tarojs/components";
import { Checkbox, Divider, Stepper } from "@antmjs/vantui";

import "./index.less";

const CarSkuCard: React.FC<{ skuInfo: { num: number, title: string, desc: string, price: string }, isSelected: boolean, onSelect: (title: string, selected: boolean) => void, onCountChange: (title: string, num: number) => void }> = ({ skuInfo, isSelected, onSelect, onCountChange }) => {
  const [value, setValue] = useState(isSelected);
  const [num, setNum] = useState(skuInfo.num);

  useEffect(() => {
    setValue(isSelected);
  }, [isSelected]);

  useEffect(() => {
    setNum(skuInfo.num);
  }, [skuInfo.num]);

  const handleChange = (e) => {
    const selected = e.detail;
    setValue(selected);
    onSelect(skuInfo.title, selected);
  };

  const handleCountChange = (e) => {
    const newNum = e.detail;
    setNum(newNum);
    onCountChange(skuInfo.title, newNum);
  };

  const renderNum = () => (
    <View className="num-block">
      <Stepper value={num} onChange={handleCountChange} />
    </View>
  );

  return (
    <View>
      <View className="card-wp">
        <View className="select-wp">
          <Checkbox
            className="check"
            checkedColor="red"
            value={value}
            onChange={handleChange}
          />
        </View>
        <Card
          className="card"
          price={skuInfo.price}
          desc={skuInfo.desc}
          title={skuInfo.title}
          thumb="https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
          renderNum={renderNum()}
        />
      </View>
      <Divider />
    </View>
  );
};

export default CarSkuCard;
