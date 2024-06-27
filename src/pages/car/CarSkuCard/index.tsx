import React, { useState } from "react";
import { Card } from "@antmjs/vantui";
import { View } from "@tarojs/components";
import { Checkbox, Divider, Stepper } from "@antmjs/vantui";

import "./index.less";

// 接受 props
const CarSkuCard: React.FC<{ skuInfo: { num: number, title: string, desc: string, price: string } }> = ({ skuInfo }) => {
  const [value, setValue] = useState(false);

  const renderNum = () => {
    return (
      <View className="num-block">
        <Stepper value={skuInfo.num}></Stepper>
      </View>
    );
  };

  return (
    <View>
      <View className="card-wp">
        <View className="select-wp">
          <Checkbox
            className="check"
            checkedColor="red"
            value={value}
            onChange={(e) => setValue(e.detail)}
          ></Checkbox>
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
