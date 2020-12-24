function createFly () {
  // 判断平台 mpvuePlatform全局变量
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly() // 实例化Fly
  } else {
    return null
  }
}
// 处理get请求
export function get (url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.get(url, params).then(response => {
        console.log(response)
        resolve(response)
      }).catch(err => {
        // console.log(err)
        handleError(err)
        reject(err)
      })
    })
  }
}
function handleError (err) {
  console.log(err)
}
// 处理post 方法
export function post (url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.post(url, params).then(response => {
        console.log(response)
        resolve(response)
      }).catch(err => {
        console.log(err)
        handleError(err)
        reject(err)
      })
    })
  }
}
