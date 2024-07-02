import React, {
  useState,
  useEffect,
  CSSProperties,
  FC,
  ReactNode,
} from "react";
import { InfiniteLoading, Toast } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";

interface InfiniteLoadingWrapperProps {
  children: ReactNode;
  height: string;
  pageSize: number;
  loadMore: () => Promise<void>;
  refresh: () => Promise<void>;
  hasMore: boolean;
}

/**
 * @typedef {Object} InfiniteLoadingWrapperProps
 * @property {ReactNode} children - 子组件，可以传入列表项或其他需要显示的内容。
 * @property {string} height - 加载组件的高度，可以是任意有效的CSS高度值（例如 "300px", "100%", "50vh"）。
 * @property {() => Promise<void>} loadMore - 加载更多数据的回调函数，必须返回一个Promise。
 * @property {() => Promise<void>} refresh - 刷新数据的回调函数，必须返回一个Promise。
 * @property {boolean} hasMore - 是否有更多数据可以加载。
 */

/**
 * 通用的上滑加载组件
 *
 * @param {InfiniteLoadingWrapperProps} props - 组件的属性
 * @returns {JSX.Element} 返回一个包裹后的加载列表组件
 */
const InfiniteLoadingWrapper: FC<InfiniteLoadingWrapperProps> = ({
  children,
  height,
  pageSize,
  loadMore,
  refresh,
  hasMore,
  ...moreProps
}) => {
  const InfiniteUlStyle: CSSProperties = {
    height: height,
    width: "100%",
    padding: "0",
    overflowY: "auto",
    overflowX: "hidden",
  };
  const [refreshList, setRefreshList] = useState<string[]>([]);

  const [show, setShow] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const toastShow = (msg: any) => {
    setToastMsg(msg);
    setShow(true);
  };

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    for (let i = 0; i < 10; i++) {
      refreshList.push(`${i}`);
    }
    setRefreshList([...refreshList]);
  };

  return (
    <View>
      <View id="refreshScroll" style={InfiniteUlStyle}>
        <InfiniteLoading
          pullingText={
            <>
              <img
                alt=""
                style={{ height: "26px", width: "36px" }}
                src="https://img13.360buyimg.com/imagetools/jfs/t1/219180/19/37902/438/65fa8cbbF5278d022/5eabe69b64bba791.png"
                className="nut-infinite-top-tips-icons"
              />
              下拉刷新
            </>
          }
          loadingText={
            <>
              <img
                alt=""
                style={{ height: "24px", width: "24px" }}
                src="https://img11.360buyimg.com/imagetools/jfs/t1/180248/35/42577/173/65fab7e9Fa868ae37/41e33477f960b5b2.png"
                className="nut-infinite-bottom-tips-icons"
              />
              加载中
            </>
          }
          target="refreshScroll"
          pullRefresh
          hasMore={hasMore}
          onLoadMore={loadMore}
          onRefresh={refresh}
          {...moreProps}
        >
          {children}
        </InfiniteLoading>
      </View>
      <Toast
        type="text"
        visible={show}
        content={toastMsg}
        onClose={() => {
          setShow(false);
        }}
      />
    </View>
  );
};

export default InfiniteLoadingWrapper;
