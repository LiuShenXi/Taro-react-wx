import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import { Provider } from 'react-redux'
import store from './store'

import '@nutui/nutui-react-taro/dist/style.css'
import '@antmjs/vantui/lib/index.less'

import './app.less'

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default App
