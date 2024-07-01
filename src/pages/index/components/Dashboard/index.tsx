import React from 'react';
import { View, Image, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';

import config from '@/config/index'

import './index.less';

const { CDN_URL } =config

const dingdan = CDN_URL('dingdan.png')
const gouwuche = CDN_URL('gouwuche.png')
const youhuiquan = CDN_URL('youhuiquan.png')
const shoucang = CDN_URL('shoucang.png')

interface DashboardItem {
  icon: string;
  label: string;
  link: string;
}

const dashboardItems: DashboardItem[] = [
  { icon: gouwuche, label: '购物车', link: '/pages/car/index' },
  { icon: youhuiquan, label: '优惠券', link: '/pages/coupons/coupons' },
  { icon: dingdan, label: '我的订单', link: '/pages/orders/orders' },
  { icon: shoucang, label: '我的收藏', link: '/pages/favorites/favorites' },
];

const Dashboard: React.FC = () => {
  const handleClick = (item: DashboardItem) => {
    if (item.label === '购物车') {
      Taro.switchTab({ url: item.link });
      return
    } // 跳转到 tabbar 需要使用 switchTab
    Taro.navigateTo({ url: item.link });    
  };

  return (
    <View className="dashboard">
      {dashboardItems.map((item) => (
        <View key={item.link} className="dashboard-item" onClick={() => handleClick(item)}>
          <Image className="icon" src={item.icon} />
          <Text className="label">{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default Dashboard;
