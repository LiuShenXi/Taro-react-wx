import { View, Text, Image } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import React, { useEffect, useState,  FC } from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react-taro'
import api from '../../utils/api'
import './index.less'
import { Swiper } from '@nutui/nutui-react-taro'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]

const Demo1 = () => {
  return (
    <Swiper defaultValue={1} autoPlay indicator>
      {list.map((item, index) => (
        <Swiper.Item key={item}>
          <Image 
            src={item} 
            style={{ width: "100%", height: '100%' }} 
            onClick={() => console.log(index)} 
          />
        </Swiper.Item>
      ))}
    </Swiper>
  )
}

export default function Index() {

  useEffect(() => {

  }, [])


  return (
    <View className='index'>
      <Demo1 />
    </View>
  )
}
