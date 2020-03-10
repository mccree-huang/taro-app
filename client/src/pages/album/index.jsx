import Taro, { useEffect, useState, previewImage } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

// import Login from '../../components/login/index'

const iconSrc = 'cloud://develop-untl9.6465-develop-untl9-1301093003/add.png'

const DB = wx.cloud.database()


export default function Index() {

  const [imgList, updateImgList] = useState([])


  useEffect(() => {

    getImgList();
  }, []);

  function getImgList() {


    DB.collection('images').get({
      success: function (res) {
        // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
        console.log(res.data)
        updateImgList(res.data)

      }
    })

  }

  function save(url) {
    DB.collection('images').add({

      data: {
        url,
      },
      success: function () {
        getImgList();
      }
    })
  }

  function postImage() {

    // 让用户选择一张图片
    wx.chooseImage({
      success: chooseResult => {

        console.log(chooseResult.tempFilePaths[0])
        // 将图片上传至云存储空间
        wx.cloud.uploadFile({

          // 指定上传到的云路径
          cloudPath: new Date().getTime() + '.png',
          // 指定要上传的文件的小程序临时文件路径
          filePath: chooseResult.tempFilePaths[0],
          // 成功回调
          success: res => {
            console.log('上传成功', res)

            save(res.fileID)

            // console.log(res)



          },
        })
      },
    })
  }


  function previewCurrent(event){
    console.log(event)
    const url = event.target.dataset.src;
    const list = [url]
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: list // 需要预览的图片http链接列表
    })
  }


  return (
    <View className='index'>

      <Button onClick={postImage}>上传图片</Button>

      <View className='container'>
        {imgList.map(item => {
          return <Image className='img' key={item._id} lazy mode='widthFix' src={item.url} data-src={item.url} onClick={previewCurrent}></Image>
        })}
      </View>

    </View>
  )
}

Index.config = {
  navigationBarTitleText: '相片墙'
}
