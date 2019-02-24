/**
 * 应用介绍
 *
 * @summary
 * @author PDK
 *
 * Created at     : 2018-02-24
 * Last modified  : 2018-02-24
 */
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AppConfig } from '@utils/app.js'
import './index.scss'

class AppIntroduce extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  render() {
    const { APP_NAME, APP_TEXT, APP_SUMMARY } = AppConfig
    return (
      <View>
        <View className='app-introduce'>
          <View className='flex_pager_1 app-title'>{APP_NAME}</View>
          <View className='flex_pager_1 app-content'>{APP_TEXT}</View>
          <View className='flex_pager_1 app-summary'>{APP_SUMMARY}</View>
        </View>
      </View>
    )
  }
}

export default AppIntroduce