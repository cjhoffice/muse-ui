import './styles/base.less'
import Vue from 'vue'
import {page, scrollView} from './scrollView'
import icon from './icon'
import badge from './badge'
import appbar from './appbar'
import iconButton from './iconButton'
import flatButton from './flatButton'
import raisedButton from './raisedButton'
import floatButton from './floatButton'
import contentBlock from './contentBlock'
import * as list from './list'
import subHeader from './subHeader'
import divider from './divider'
import refreshControl from './refreshControl'
import infiniteScroll from './infiniteScroll'
import avatar from './avatar'
import * as tabs from './tabs'
import paper from './paper'
import searchBar from './searchBar'
import * as bottomNav from './bottomNav'
import * as card from './card'
import chip from './chip'
import overlay from './internal/popup/overlay'
import dialog from './dialog'
import toast from './toast'
import snackbar from './snackbar'
import popup from './popup'
import * as menu from './menu'
import actionsheet from './actionsheet'
const components = {
  page,
  scrollView,
  icon,
  badge,
  appbar,
  iconButton,
  flatButton,
  raisedButton,
  floatButton,
  contentBlock,
  ...list,
  subHeader,
  divider,
  refreshControl,
  infiniteScroll,
  avatar,
  ...tabs,
  paper,
  searchBar,
  ...bottomNav,
  ...card,
  chip,
  overlay,
  dialog,
  toast,
  snackbar,
  popup,
  ...menu,
  actionsheet
}

export default {
  install () {
    Object.keys(components).forEach((key) => {
      Vue.component(components[key].name, components[key])
    })
    // 处理retina屏幕显示效果
    var classNames = []
    let pixelRatio = window.devicePixelRatio || 1
    classNames.push('pixel-ratio-' + Math.floor(pixelRatio))
    if (pixelRatio >= 2) {
      classNames.push('retina')
    }

    let html = document.getElementsByTagName('html')[0]

    classNames.forEach((className) => html.classList.add(className))
  }
}