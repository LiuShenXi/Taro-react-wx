import { FC, useEffect, useState } from 'react'
import { View, Image } from '@tarojs/components'
import { ImagePreview, Cell, Swiper } from '@nutui/nutui-react-taro'

const imgList = [
  {
    src: '//fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
  },
]

interface ImageSwiperPreviewProps {
  skuId: number;
}

const ImageSwiperPreview: FC<ImageSwiperPreviewProps> = (props) => {
  const { skuId } = props

  const [showPreview, setShowPreview] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(()=> {
    console.log('showPreview: ', showPreview)
  },[showPreview])

  return (
    <View>
      <Swiper 
        defaultValue={currentIndex} 
        indicator
        // onChange={(val) => setCurrentIndex(val - 1)}
      >
      {imgList.map((item, index) => (
        <Swiper.Item key={item.src}>
          <Image
            onClick={() => setShowPreview(true)}
            src={item.src}
          />
        </Swiper.Item>
      ))}
    </Swiper>
      <ImagePreview
        autoPlay
        images={imgList}
        visible={showPreview}
        closeIcon
        // value={currentIndex}
        closeIconPosition="bottom"
        onChange={(val) => {
          setCurrentIndex(val - 1)
        }}
        onClose={() => {
          setShowPreview(false)
        }}
      />
    </View>
  )
}

export default ImageSwiperPreview