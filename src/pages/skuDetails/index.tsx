import { FC, useEffect, useState } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, Text } from '@tarojs/components';
import ImageSwiperPreview from '@/components/ImageSwiperPreview/index'
import BottomTabbar from './components/BottomTabbar/index'
import SkuDetailsContent from './components/SkuDetailsContent/index'

import './index.less'

const details = {
  productName: '皮肤光子嫩肤, 5次疗程',
  currentPrice: 2499.9,
  productDescription: '皮肤像4090显卡一样闪亮'
}

const skuDetails: FC = () => {

  const [skuId, setSkuId] = useState(0)

  const { productName, currentPrice, productDescription } = details

  useEffect(() => {
    const instance = getCurrentInstance()
    const id = instance?.router?.params?.skuId
    setSkuId(Number(id))
  }, [])

  return (
    <View style={{ backgroundColor: '#fff' }}>
      {/* <Text>{skuId}</Text> */}
      {/* 预览轮播图 */}
      <ImageSwiperPreview skuId={skuId} />
      {/* 商品基本信息 */}
      <View className="product-details">
        <View className="product-name">{productName}</View>
        <View className="product-description">{productDescription}</View>
        <Text className="product-price">¥ {currentPrice.toFixed(2)}</Text>
      </View>
      {/* 商品详情 */}
      <SkuDetailsContent />
      {/* 底部操作栏 */}
      <BottomTabbar />
    </View>
  )
}

export default skuDetails