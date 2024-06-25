import { FC, useEffect, useState, useRef } from 'react'
import { View, Image } from '@tarojs/components'
import { ImagePreview, Cell, Swiper } from '@nutui/nutui-react-taro'

const imgList = [
  {
    src: 'https://github.com/LiuShenXi/Taro-react-wx/blob/main/src/public/image/ROG0.jpg?raw=true',
  },
  {
    src: 'https://github.com/LiuShenXi/Taro-react-wx/blob/main/src/public/image/ROG1.jpg?raw=true',
  },
  {
    src: 'https://github.com/LiuShenXi/Taro-react-wx/blob/main/src/public/image/ROG2.jpg?raw=true',
  },
  {
    src: 'https://github.com/LiuShenXi/Taro-react-wx/blob/main/src/public/image/ROG3.jpg?raw=true',
  },
  {
    src: 'https://github.com/LiuShenXi/Taro-react-wx/blob/main/src/public/image/ROG4.jpg?raw=true'
  }
]

interface ImageSwiperPreviewProps {
  skuId: number;
}

const ImageSwiperPreview: FC<ImageSwiperPreviewProps> = (props) => {
  const { skuId } = props

  const [showPreview, setShowPreview] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const imageRefs = useRef<(HTMLImageElement | null)>(null);

  useEffect(()=> {
    console.log('showPreview: ', showPreview)
  },[showPreview])

  useEffect(() => {
    const updateSwiperHeight = () => {
      
      if (imageRefs) {
        // const containerWidth = imageRefs?.parentElement?.clientWidth || width;
        // const calculatedHeight = (height / width) * containerWidth;
        console.log('imageRefs: ', imageRefs)
      }
    };

    updateSwiperHeight()
  }, [])

  return (
    <View>
      <Swiper 
        defaultValue={currentIndex} 
        indicator
        height={'375px'}
        // width={375}
        // onChange={(val) => setCurrentIndex(val - 1)}
      >
      {imgList.map((item, index) => (
        <Swiper.Item key={item.src}>
          <img
            ref={imageRefs}
            onClick={() => setShowPreview(true)}
            src={item.src}
            width={'100%'}
            height={'375px'}
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