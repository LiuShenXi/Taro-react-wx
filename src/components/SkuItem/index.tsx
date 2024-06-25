import React from 'react';
import { View, Text, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Button } from '@nutui/nutui-react-taro'
import './index.less';

type idtype = number;

interface SkuInfo {
  imageSrc: string;
  productName: string;
  currentPrice: number;
  originalPrice: number;
  discountRate: string;
  detailLink: string;
  sales: number;
  skuId: idtype;
}

interface SkuItemProps {
  skuInfo: SkuInfo;
}

const SkuItem: React.FC<SkuItemProps> = ({ skuInfo }) => {
  const {
    imageSrc,
    productName,
    currentPrice,
    originalPrice,
    discountRate,
    detailLink,
    sales,
    skuId
  } = skuInfo;

  const handlePurchaseClick = () => {
    Taro.navigateTo({ url: detailLink });
  };

  const toDetails = (skuId) => {
    const url = detailLink + '?skuId=' + skuId
    Taro.navigateTo({ url: url });
  }

  return (
    <View className="sku-item" onClick={() => {toDetails(skuId)}}>
      <View className="image-section">
        <Image src={imageSrc} className="product-image" />
      </View>
      <View className="info-section">
        <Text className="product-name">{productName}</Text>
        <View className="price-section">
          <Text className="current-price">¥{currentPrice}</Text>
          <Text className="discount-rate">{discountRate}折</Text>
          <Text className="original-price">¥{originalPrice}</Text>
        </View>
      </View>
      <View className='btn-wp'>
        <View className="sales">销量{sales}</View>
        <Button block size="large" type="primary" className="purchase-button" onClick={handlePurchaseClick}>抢购</Button>
      </View>     
    </View>
  );
};

export default SkuItem;
