import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import { Provider } from 'react-redux'
import { FC } from 'react'
import store from './store'

import './app.less'

function App({ children }: PropsWithChildren<any>): FC {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return (<Provider store={store}>{children}</Provider>)
}

export default App
