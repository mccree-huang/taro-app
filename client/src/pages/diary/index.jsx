import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import './index.less'

import Login from '../../components/login/index'

export default function Index(){




    return (
      <View className='index'>
      日记
      </View>
    )
}

Index.config = {
  navigationBarTitleText: '记录本'
}
