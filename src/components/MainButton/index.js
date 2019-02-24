/**
 * 主按钮
 * @Author: PDK
 * @Date:   2019-02-21
 * @Last modified by:   PDK
 * @Last modified time: 2019-02-21
 */

import Taro, { PureComponent } from '@tarojs/taro'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Button, Text } from '@tarojs/components'

import './index.scss'

class MainButton extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf([
      'begin', // 主按钮
      'extend', // 二级按钮
      'review' // 三级按钮
    ]),
    text: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf([
      'big', //主按钮 307px
      'normal', //二级按钮 302px
      'small' //三级按钮 250px
    ]),
    width: PropTypes.string
  }

  static defaultProps = {
    text: '开始学习',
    type: 'begin',
    size: 'big',
    width: ''
  }

  handleClick = () => {
    this.props.onClick()
  }

  render() {
    return (
      <Button
        className={classnames('main-btn', `main-btn-${this.props.type}-bg`, {
          ' small ': this.props.size === 'small',
          ' normal ': this.props.size === 'normal'
        })}
        hoverClass={classnames(`main-btn-${this.props.type}-hover-bg`)}
        onClick={this.handleClick}
        style={{ width: this.props.width }}
      >
        <Text className='text'>{this.props.text}</Text>
      </Button>
    )
  }
}

export default MainButton