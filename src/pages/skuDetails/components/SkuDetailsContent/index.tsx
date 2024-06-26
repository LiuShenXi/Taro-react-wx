import React, { FC, useState, useRef, useEffect } from 'react';
import { Cell, ConfigProvider } from '@nutui/nutui-react-taro'
import { View, Image, Text } from '@tarojs/components';
import { Divider } from '@antmjs/vantui'

import './index.less'

const list = [
  'https://github.com/LiuShenXi/Taro-react-wx/blob/main/src/public/image/D1.jpg?raw=true',
  'https://github.com/LiuShenXi/Taro-react-wx/blob/main/src/public/image/D2.jpg?raw=true',
  'https://github.com/LiuShenXi/Taro-react-wx/blob/main/src/public/image/D3.jpg?raw=true',
  'https://github.com/LiuShenXi/Taro-react-wx/blob/main/src/public/image/D4.jpg?raw=true',
  'https://github.com/LiuShenXi/Taro-react-wx/blob/main/src/public/image/D5.jpg?raw=true'
]

const SkuDetailsContent: React.FC = () => {

  const currentGoods = {
    skuName: '亮黑色&8GB+256GB'
  }

  const [detailsImgList, setDetailsImgList] = useState<string[]>([])

  useEffect(() => {
    setDetailsImgList(list)
  }, [])

  const DetailsImage: FC = () => {
    return (
      <View>
        {detailsImgList.map(item => {
          return (
            <Image src={item} mode='widthFix' style={{ width: '100%', display: 'block' }} />
          )
        })}
      </View>
    )
  }

  return (
    <View>
      <Divider />
      <Text className='current'>
        {`已选择 ${currentGoods?.skuName || "--"} x ${1}`}
      </Text>
      <Divider contentPosition="center" >商品详情</Divider>
      <DetailsImage />
    </View>
  )
};

export default SkuDetailsContent;