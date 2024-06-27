import React, { useState, useRef, useEffect } from "react";
import { Card } from "@antmjs/vantui";
import { View, Text } from "@tarojs/components";
// import { Cell, Checkbox } from "@nutui/nutui-react-taro";
import { Checkbox, CheckboxGroup, Divider, Stepper } from "@antmjs/vantui";

import "./index.less";

const num = 2;

const CarSkuCard: React.FC = () => {
  const [value, setValue] = useState(false);

  const renderNum = () => {
    return (
      <View className="num-block">
        <Text className="nums">数量：{num}</Text>
        <Stepper></Stepper>
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
          // num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
          renderNum={renderNum()}
        />
      </View>
      <Divider />
    </View>
  );
};

export default CarSkuCard;
