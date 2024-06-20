import { View, Text } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { ThreadList } from '../../components/thread_list'
import api from '../../utils/api'
import './index.less'

export default function Index() {

  const [loading, setLoading] = useState(true)
  const [threads, setThreads] = useState(true)

  useEffect(() => {
    const fn = async () => {
      try {
        const res = await Taro.request({
          url: api.getLatestTopic(),
        })
        this.setState({
          threads: res.data,
          loading: false,
        })
      } catch (error) {
        Taro.showToast({
          title: '载入远程数据错误',
        })
      }
    }   
    fn()
  }, [])

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <ThreadList threads={threads} loading={loading} />
    </View>
  )
}
