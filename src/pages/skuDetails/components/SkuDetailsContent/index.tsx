import React, { useState, useRef, useEffect } from 'react';
import { Cell } from '@nutui/nutui-react-taro'
import { View, Image, Text } from '@tarojs/components';
import { Divider } from '@antmjs/vantui'

import './index.less'

const SkuDetailsContent: React.FC = () => {

  const currentGoods = {
    skuName: '亮黑色&8GB+256GB'
  }

  return (
    <View>
      <Divider />
      <Text className='current'>
        {`已选择 ${currentGoods?.skuName || "--"} x ${1}`}
      </Text>
      <Divider contentPosition="center" >商品详情</Divider>
    </View>
  )
};

export default SkuDetailsContent;