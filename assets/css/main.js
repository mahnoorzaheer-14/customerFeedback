
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})


import VueMobileDetection from 'vue-mobile-detection'
Vue.use(VueMobileDetection)