import { View } from '@tarojs/components'
// import Taro, { useLoad } from '@tarojs/taro'
import React, { useEffect, useState,  FC } from 'react'
import './index.less'

import Dashboard from './components/Dashboard/index'
import SkuItem from '@/components/SkuItem/index'
import HeaderSwiper from './components/HeaderSwiper/index'
import { skuList } from './service'

export default function Index() {

  useEffect(() => {

  }, [])

  return (
    <View className='index'>
      <HeaderSwiper />
      <Dashboard />
      {skuList.map(item => (
        <SkuItem key={item.productName} skuInfo={item} />
      ))}     
    </View>
  )
}
