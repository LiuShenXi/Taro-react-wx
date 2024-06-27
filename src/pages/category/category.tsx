import React, { useState, useRef, useEffect } from "react";
import { View, Image, Text } from "@tarojs/components";
import { Tabs } from "@nutui/nutui-react-taro";
import { TreeSelect } from "@antmjs/vantui";

import './index.less'

const tabList = [
  {
    text: "光电系列",
  },
  {
    text: "aaa",
  },
];

const Category: React.FC = () => {
  const [tab5value, setTab5value] = useState<string | number>("0");
  const list5 = Array.from(new Array(2).keys());

  const [tab7value, setTab7value] = useState("skinCare");
  const categories = [
    {
      title: "皮肤护理",
      paneKey: "skinCare",
      // icon: <SomeIcon />,
    },
    {
      title: "面部微整形",
      paneKey: "facialSurgery",
      // icon: <SomeIcon />,
    },
    {
      title: "身体塑形",
      paneKey: "bodyShaping",
      // icon: <SomeIcon />,
    },
    {
      title: "毛发管理",
      paneKey: "hairManagement",
      // icon: <SomeIcon />,
    },
    {
      title: "医学纹绣",
      paneKey: "medicalTattoo",
      // icon: <SomeIcon />,
    },
    {
      title: "口腔美容",
      paneKey: "oralBeauty",
      // icon: <SomeIcon />,
    },
    {
      title: "激光治疗",
      paneKey: "laserTreatment",
      // icon: <SomeIcon />,
    },
    {
      title: "其他项目",
      paneKey: "otherProjects",
      // icon: <SomeIcon />,
    },
  ];
  

  const renderTitle = () => {
      return categories.map((item) => (
        <div
          onClick={() => setTab7value(item.paneKey)}
          className={`tabs-wp nut-tabs-titles-item ${
            tab7value === item.paneKey ? "nut-tabs-titles-item-active" : ""
          }`}
          key={item.paneKey}
          style={{ height: 60 }}
        >
          {/* {item.icon || null} */}
          <span className="nut-tabs-titles-item-text">{item.title}</span>
          {/* <span className="nut-tabs-titles-item-line" /> */}
        </div>
      ));
  };

  return (
    <View>
      <Tabs
        value={tab7value}
        direction="vertical"
        title={renderTitle}
        tabStyle={{ width: 120, height: '90vh' }}
        duration='0'
      >
        {categories.map((item) => (
          <Tabs.TabPane key={item.paneKey} value={item.paneKey}>
            {item.title}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </View>
  );
};

export default Category;
