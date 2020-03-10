// 云函数入口文件
const cloud = require('wx-server-sdk')

// const DB = wx.cloud.database({
//   env: 'develop-untl9'
// })

// const Todos = DB.collection('todos');

cloud.init()

const DB = cloud.database({
  env: 'develop-untl9'
});


// console.log(DB)

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()



  // 查表中所有的数据
  // try {
  //     return await DB.collection('todos').get({
  //     success: function (res) {
  //       console.log(DB.collection('todos'))
  //       return res
  //     }
  //   });
  // } catch (e) {
  //   console.error(e);
  // }


  //按条件查询
  try {
    return await DB.collection('todos').where({
      // _openid:'oByY85FnZn9RxGMPNlIu3bPk9XRo',
      age: 25
    }).get({
      success: function (res) {
        return res
      }
    });
  } catch (e) {
    console.error(e);
  }




  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}