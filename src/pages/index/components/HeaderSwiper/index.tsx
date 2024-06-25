import React, { useState, useEffect } from 'react';
import { Swiper } from '@nutui/nutui-react-taro'
import { Image } from '@tarojs/components'
import Taro from '@tarojs/taro';

import localImageA from '@/public/image/a.jpg';
import localImageB from '@/public/image/b.jpg';
import localImageC from '@/public/image/c.jpg';
import localImageD from '@/public/image/d.jpg';

const fetchRemoteImageList = async () => {
  return Taro.request({
    url: 'https://your-api-endpoint.com/getImageList',
    method: 'GET',
  }).then(response => response.data);
};

const localImages = [localImageA, localImageB, localImageC, localImageD];

const HeaderSwiper: React.FC = () => {
  const [list, setList] = useState<string[]>(localImages);

  useEffect(() => {
    const getImageList = async () => {
      try {
        const remoteImages = await fetchRemoteImageList();
        // if (remoteImages && remoteImages.length > 0) {
        //   setList([...localImages, ...remoteImages]);
        // }
        setList([...localImages])
      } catch (error) {
        console.error('Failed to fetch remote images:', error);
      }
    };
    getImageList();
  }, []);

  return (
    <Swiper defaultValue={1} autoPlay indicator height='200px'>
      {list.map((item, index) => (
        <Swiper.Item key={index}>
          <Image 
            src={item} 
            style={{ width: "100%", height: '200px' }} 
            onClick={() => console.log(index)} 
          />
        </Swiper.Item>
      ))}
    </Swiper>
  );
};

export default HeaderSwiper;
