import { FC, useEffect, useState } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, Text } from '@tarojs/components';
import ImageSwiperPreview from '@/components/ImageSwiperPreview/index'

const skuDetails: FC = () => {

  const [skuId, setSkuId] = useState(0)

  useEffect(() => {
    const instance = getCurrentInstance()
    const id = instance?.router?.params?.skuId
    setSkuId(Number(id))
  }, [])

  return (
    <View>
      {/* <Text>{skuId}</Text> */}
      <ImageSwiperPreview skuId={skuId} />
    </View>
  )
}

export default skuDetails