import Taro, { useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import './index.less'


export default function Index() {


  const list = [{
    key: '姓名',
    value: '黄嘉琪'
  }, {
    key: '年龄',
    value: '8个月'
  }, {
    key: '生日',
    value: '07.13'
  }]





  return (
    <View className='home-page'>
      {/* <image src="cloud://develop-untl9.6465-develop-untl9-1301093003/1582873975548.png"></image> */}
      <view>
       黄嘉琪
        {/* {list.map(item => {
          return <view key={item.key}>
            <div>{item.key}:</div>
            <div>{item.value}</div>
          </view>
        })} */}
      </view>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '个人主页'
}
