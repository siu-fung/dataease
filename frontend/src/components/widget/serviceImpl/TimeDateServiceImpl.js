import { WidgetService } from '../service/WidgetService'
const defaultOptions = {
  name: 'timeDateWidget',
  icon: null,
  label: '日期',
  style: {
    width: 200,
    height: 22,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '',
    letterSpacing: 0,
    textAlign: '',
    color: ''
  },
  options: {
    refId: '1234567890',
    attrs: {
      type: 'date',
      placeholder: '请选择日期'
    },
    value: ''
  },
  component: 'de-date'
}

class TimeDateServiceImpl extends WidgetService {
  constructor(options) {
    Object.assign(options, defaultOptions)
    super(options)
  }

  initWidget() {
    // console.log('this is first initWidget')
  }
  toDrawWidget() {
    // console.log('this is first toDrawWidget')
  }
  // 移动到画布之前回掉
  beforeToDraw() {

  }
}
const timeDateServiceImpl = new TimeDateServiceImpl({ name: 'timeDateWidget' })
export default timeDateServiceImpl