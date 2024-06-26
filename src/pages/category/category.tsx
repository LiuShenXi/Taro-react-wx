import React, { useState, useRef, useEffect } from 'react';
import { View, Image, Text } from '@tarojs/components';
import { Tabs } from '@nutui/nutui-react-taro'
import { TreeSelect } from '@antmjs/vantui'

const tabList = [
  {
    text: '光电系列'
  },
  {
    text: 'aaa'
  }
]

const Category: React.FC = () => {

  const [tab5value, setTab5value] = useState<string | number>('0')
  const list5 = Array.from(new Array(2).keys())

  const [tab7value, setTab7value] = useState('c1')
  const list6 = [
    {
      title: '自定义 1',
      paneKey: 'c1',
      // icon: <Star />,
    },
    {
      title: '自定义 2',
      paneKey: 'c2',
    },
    {
      title: '自定义 3',
      paneKey: 'c3',
    },
  ]

  const renderTitle = () => {
    return tabList.map(item => {
            return (<View>
              <Text>{item.text}</Text>
            </View>)
          }) 
  }

  return (
    <View>
      <Tabs
        value={tab7value}
        direction='vertical'
        title={() => {
          return list6.map((item) => (
            <div
              onClick={() => setTab7value(item.paneKey)}
              className={`nut-tabs-titles-item ${tab7value === item.paneKey ? 'nut-tabs-titles-item-active' : ''}`}
              key={item.paneKey}
            >
              {/* {item.icon || null} */}
              <span className="nut-tabs-titles-item-text">{item.title}</span>
              <span className="nut-tabs-titles-item-line" />
            </div>
          ))
        }}
      >
        {list6.map((item) => (
          <Tabs.TabPane key={item.paneKey} value={item.paneKey}>
            {item.title}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </View>
  )
};

export default Category;