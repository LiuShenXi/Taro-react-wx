import { View } from '@tarojs/components'
// import Taro, { useLoad } from '@tarojs/taro'
import { InfiniteLoading } from '@nutui/nutui-react-taro'
import React, { useEffect, useState,  FC } from 'react'
import './index.less'

import Dashboard from './components/Dashboard/index'
import SkuItem from '@/components/SkuItem/index'
import HeaderSwiper from './components/HeaderSwiper/index'
import InfiniteLoadingWrapper from '@/components/InfiniteLoadingWrapper'
import { skuList } from './service'

export default function Index() {

  const [refreshHasMore, setRefreshHasMore] = useState<boolean>(false)

  useEffect(() => {

  }, [])

  const loadMore = async () => {

  }

  const refresh = async () => {
    
  }

  return (
    <View className='index'>
      <HeaderSwiper />
      <Dashboard />
      <InfiniteLoadingWrapper 
        height='510px'
        pageSize={10}
        loadMore={loadMore}
        refresh={refresh}
        hasMore={refreshHasMore}
      >
        {skuList.map(item => (
          <SkuItem key={item.productName} skuInfo={item} />
        ))}  
      </InfiniteLoadingWrapper>        
    </View>
  )
}
