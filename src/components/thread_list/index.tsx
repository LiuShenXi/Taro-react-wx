import React from 'react'
import { View, Text } from '@tarojs/components'
import Thread from './thread'
import Loading from './loading'

// import './thread.css'

interface threadProps {
  title,
  member,
  last_modified,
  replies,
  node,
  not_navi?,
  tid?
}

interface ThreadListProps {
  threads: threadProps[];
  loading: boolean;
}

const ThreadList: React.FC<ThreadListProps> = ({ threads, loading }) => {

  if (loading) {
    return <Loading />
  }

  const element = threads.map((thread, index) => {
    return (
      <Thread
        key={thread.tid}
        node={thread.node}
        title={thread.title}
        last_modified={thread.last_modified}
        replies={thread.replies}
        tid={thread.tid}
        member={thread.member}
      />
    )
  })
  return (
    <View className="thread-list">{element}</View>
  )
}


export default ThreadList 