// 数据mock

// 几种方案
// 1. 手写 data ref
// 2. 三方开源工具 json-server + faker
// 3. 自研平台

// json-server restful api json文件
// faker 数据模拟

import Axios from './utils/request'
import { useEffect } from "react"

function App () {
  useEffect(() => {
    Axios.get('http://localhost:3000/users').then(res => {
      console.log(res)
    })
  }, [])
  return (
    <div className="App"></div>
  )
}

export default App
