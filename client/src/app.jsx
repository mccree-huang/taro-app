import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import 'taro-ui/dist/style/index.scss'
import './app.scss'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/album/index',
      'pages/index/index',
      'pages/vlog/index',
      'pages/diary/index',


    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#000',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    cloud: true,
    tabBar: {
      color: '#000',
      selectedColor: '#7fccde',
      backgroundColor: '#cb99c5',
      list: [
        {
          pagePath: 'pages/index/index',
          text: 'home',
          iconPath: 'asset/home.png',
          selectedIconPath: 'asset/home_active.png'
        },
        {
          pagePath: 'pages/album/index',
          text: 'album',
          iconPath: 'asset/album.png',
          selectedIconPath: 'asset/album_active.png'
        },
        {
          pagePath: 'pages/vlog/index',
          text: 'vlog',
          iconPath: 'asset/vlog.png',
          selectedIconPath: 'asset/vlog_active.png'
        },
        {
          pagePath: 'pages/diary/index',
          text: 'diary',
          iconPath: 'asset/diary.png',
          selectedIconPath: 'asset/diary_active.png'
        }
      ]
    },
  }

  componentDidMount() {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init({
        env: 'develop-untl9'
      })
    }
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
