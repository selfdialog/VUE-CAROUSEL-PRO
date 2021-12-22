import Carousel from './Carousel';

let JsppUI = {}

JsppUI.install = function(Vue) {
    Vue.component(Carousel.name, Carousel)
}

export default JsppUI;