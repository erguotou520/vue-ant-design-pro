import Vue from 'vue'
import clickoutside from 'iview/src/directives/clickoutside'
import AppPage from './AppPage'
import 'iview/dist/styles/iview.css'

import {
  Alert,
  AutoComplete,
  Avatar,
  BackTop,
  Badge,
  Button,
  Card,
  Carousel,
  Cascader,
  Checkbox,
  Collapse,
  ColorPicker,
  DatePicker,
  Dropdown,
  Form,
  Icon,
  Input,
  InputNumber,
  LoadingBar,
  Menu,
  Message,
  Modal,
  Notice,
  Page,
  Poptip,
  Progress,
  Radio,
  Rate,
  Slider,
  Spin,
  Steps,
  Table,
  Tabs,
  Tag,
  Timeline,
  TimePicker,
  Tooltip,
  Transfer,
  Tree,
  Upload
} from 'iview'

import { Row, Col } from 'iview/src/components/grid'
import { Select, Option, OptionGroup } from 'iview/src/components/select'

const components = {
  Alert,
  AutoComplete,
  Avatar,
  BackTop,
  Badge,
  Button,
  ButtonGroup: Button.Group,
  Card,
  Carousel,
  CarouselItem: Carousel.Item,
  Cascader,
  Checkbox,
  CheckboxGroup: Checkbox.Group,
  Col,
  Collapse,
  ColorPicker,
  DatePicker,
  Dropdown,
  DropdownItem: Dropdown.Item,
  DropdownMenu: Dropdown.Menu,
  Form,
  FormItem: Form.Item,
  Icon,
  Input,
  InputNumber,
  LoadingBar,
  Menu,
  MenuGroup: Menu.Group,
  MenuItem: Menu.Item,
  Submenu: Menu.Sub,
  Message,
  Modal,
  Notice,
  Option,
  OptionGroup,
  Page,
  Panel: Collapse.Panel,
  Poptip,
  Progress,
  Radio,
  RadioGroup: Radio.Group,
  Rate,
  Row,
  Select,
  Slider,
  Spin,
  Step: Steps.Step,
  Steps,
  Table,
  Tabs,
  TabPane: Tabs.Pane,
  Tag,
  Timeline,
  TimelineItem: Timeline.Item,
  TimePicker,
  Tooltip,
  Transfer,
  Tree,
  Upload
}

Object.keys(components).forEach(key => {
  if (process.env.NODE !== 'production') {
    console.log('i' + key)
  }
  Vue.component('i' + key, components[key])
})

Vue.component('AppPage', AppPage)
Vue.directive('clickoutside', clickoutside)
