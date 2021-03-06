import {Component} from 'react'
import * as Taro from "@tarojs/taro";
import './app.scss'

class App extends Component {

  componentDidMount() {
    Taro.cloud.init()
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
