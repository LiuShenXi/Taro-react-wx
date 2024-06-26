import { FC, useEffect, useState } from "react";
import {
  GoodsAction,
  Sku,
  GoodsActionIcon,
  GoodsActionButton,
  Toast,
  Stepper
} from "@antmjs/vantui";
import Taro from '@tarojs/taro';
import { Popup, Cell, Button, InputNumber, ConfigProvider } from "@nutui/nutui-react-taro";
import { View, Text } from "@tarojs/components";
import { sku, goodsList } from "../../service";

import "./index.less";

// 原本的数字选择器尺寸太小了，通过配置主题放大选择器
const large = {
  nutuiInputnumberInputWidth: '80px',
  nutuiInputnumberInputHeight: '48px',
  nutuiInputnumberIconSize: '20px',
  nutIconWidth: '40px'
}

const BottomTabbar: FC = () => {

  const [showPopup, setShowPopup] = useState(false);
  // 选中的商品，可以获取自定义属性如：商品图片、价格、数量
  const [currentGoods, setCurrent] = useState<any>({});

  const itemDisable = (goodsItem) => {
    if (!goodsItem) return true;
    // 商品表可设定count为库存数，或者通过其它条件判断
    if (goodsItem.count === 0) return true;

    return false;
  };

  const handleYes = () => {
    setShowPopup(false);
  }

  const toCar = () => {
    Taro.switchTab({ url: '/pages/car/index' });
  }

  useEffect(() => {}, []);

  return (
    <View>
      <GoodsAction>
        <GoodsActionIcon icon="star-o" text="收藏" />
        <GoodsActionIcon onClick={toCar} icon="cart-o" text="购物车" />
        <GoodsActionButton
          color="#be99ff"
          text="加入购物车"
          type="warning"
          onClick={() => {
            setShowPopup(true);
          }}
        />
        <GoodsActionButton
          color="#7232dd"
          text="立即购买"
          onClick={() => {
            setShowPopup(true);
          }}
        />
      </GoodsAction>
      <Popup
        visible={showPopup}
        position="bottom"
        onClose={() => {
          setShowPopup(false);
        }}
      >
        <View className="pop-wp">
          <Toast />
          <View style={{ fontSize: 16 }}>当前选择商品：</View>
          <View style={{ paddingBottom: 10, fontSize: 16 }}>
            HUAWEI手机【{currentGoods?.skuName || "--"}】
          </View>
          <Sku
            autoChoice={true}
            sku={sku}
            goodsList={goodsList}
            onChange={(e) => setCurrent(e)}
            clickAttrDisable={() => Toast.show(`暂无库存`)}
            itemDisable={itemDisable}
            itemRender={(it) => {
              if (it["color"]) {
                return (
                  <View className="sku-color-item">
                    <View
                      className="color-item"
                      style={{ background: it["color"] }}
                    ></View>
                    <View>{it.name}</View>
                  </View>
                );
              }

              return it.name;
            }}
          />
          <View style={{ display: 'flex',marginTop: 20 }}>
            <Text className="numText">数量: </Text>
            <Stepper />
          </View>
          <Button
            className="addBtn"
            block
            type="primary"
            onClick={handleYes}
          >
            确定
          </Button>
        </View>      
      </Popup>
    </View>
  );
};

export default BottomTabbar;
