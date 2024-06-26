import React, { useState, useRef, useEffect } from 'react';
import { View, Image, Text } from '@tarojs/components';
import { Tabs } from '@nutui/nutui-react-taro'
import { TreeSelect } from '@antmjs/vantui'

const tabList = [
  {
    text: '光电系列'
  }
]

const Category: React.FC = () => {



  return (
    <View>
      <TreeSelect
        items={tabList}
        height="90vw"
        mainActiveIndex={0}
        renderContent={<Image src="https://img.yzcdn.cn/vant/apple-1.jpg" />}
      />
    </View>
  )
};

export default Category;