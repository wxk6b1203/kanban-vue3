import { createApp } from 'vue'
import App from './App.vue'
import  store from "@/store/store";
import router from "@/router";
import { Layout, Modal, Row, Col, Input, Button, BackTop } from "ant-design-vue";

import i18n from '@/i18n'

let app = createApp(App)

app.use(store)
app.use(router)

app.use(Layout)
app.use(Modal)
app.use(Row)
app.use(Col)
app.use(Input)
app.use(Button)
app.use(BackTop)

app.use(i18n)

app.mount('#app')
