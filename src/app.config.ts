export default defineAppConfig({
  pages: [
    'pages/index/index', // 首页
    'pages/category/category', // 分类
    'pages/car/car', // 购物车
    'pages/user/user', // 我的
    'pages/orders/orders', // 订单
    'pages/favorites/favorites', // 收藏
    'pages/coupons/coupons', // 优惠券
  ],
  tabBar: {
    list: [
      {
        iconPath: 'public/icon/home.png',
        selectedIconPath: 'public/icon/home.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: 'public/icon/list.png',
        selectedIconPath: 'public/icon/list.png',
        pagePath: 'pages/category/category',
        text: '分类',
      },
      {
        iconPath: 'public/icon/shangpinguanli.png',
        selectedIconPath: 'public/icon/shangpinguanli.png',
        pagePath: 'pages/car/car',
        text: '购物车',
      },
      {
        iconPath: 'public/icon/yonghuguanli.png',
        selectedIconPath: 'public/icon/yonghuguanli.png',
        pagePath: 'pages/user/user',
        text: '我的',
      },
    ],
    color: '#000',
    selectedColor: '#f00b21',
    backgroundColor: '#fff',
    borderStyle: 'white',
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
