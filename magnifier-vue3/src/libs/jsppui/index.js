import Magnifier from './components/Magnifier'

let JsppUI = {};

JsppUI.install = (Vue) => {
  Vue.component(Magnifier.name, Magnifier)
}

export default JsppUI;