import Taro from '@tarojs/taro'
import React, { FC, useEffect, useState } from 'react'
import { View, RichText, Image } from '@tarojs/components'
import { Thread } from '../../components/thread_list/thread'
import { Loading } from '../../components/thread_list/loading'
import api from '../../utils/api'
import { timeagoInst, GlobalState } from '../../utils'

import './index.css'

type IState = {
  loading: boolean;
  replies: Array<any>;
  content: string;
  thread: Record<string, any>;
}

function prettyHTML (str) {
  const lines = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']

  lines.forEach(line => {
    const regex = new RegExp(`<${line}`, 'gi')

    str = str.replace(regex, `<${line} class="line"`)
  })

  return str.replace(/<img/gi, '<img class="img"')
}

const ThreadDetail: FC = () => {

  const [state, setState] = useState<IState>({
    loading: true,
    replies: [],
    content: '',
    thread: {}
  })

  const config = {
    navigationBarTitleText: '话题'
  }

  useEffect(() => {
    const fn = async () => {
      try {
        const id = GlobalState.thread.tid
        const [{ data }, { data: [ { content_rendered } ] } ] = await Promise.all([
          Taro.request({
            url: api.getReplies({
              'topic_id': id
            })
          }),
          Taro.request({
            url: api.getTopics({
              id
            })
          })
        ])
        setState({
          loading: false,
          replies: data,
          content: prettyHTML(content_rendered),
          thread: GlobalState.thread
        })
      } catch (error) {
        Taro.showToast({
          title: '载入远程数据错误'
        })
      }
    }
    fn()
  }, [])

  const { loading, replies, content, thread } = state

  const replieEl = replies.map((reply, index) => {
    const time = timeagoInst.format(reply.last_modified * 1000, 'zh')
    return (
      <View className='reply' key={reply.id}>
        <Image src={reply.member.avatar_large} className='avatar' />
        <View className='main'>
          <View className='author'>
            {reply.member.username}
          </View>
          <View className='time'>
            {time}
          </View>
          <RichText nodes={reply.content} className='content' />
          <View className='floor'>
            {index + 1} 楼
          </View>
        </View>
      </View>
    )
  })

  const contentEl = loading
    ? <Loading />
    : (
      <View>
        <View className='main-content'>
        <RichText nodes={content} />
        </View>
        <View className='replies'>
          {replieEl}
        </View>
      </View>
    )

    return (
      <View className='detail'>
        <Thread
          node={thread.node}
          title={thread.title}
          last_modified={thread.last_modified}
          replies={thread.replies}
          tid={thread.id}
          member={thread.member}
          not_navi={true}
        />
        {contentEl}
      </View>
    )

}

export default ThreadDetail