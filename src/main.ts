import { createApp } from 'vue'
import App from './App.vue'
import  store from "@/store/store";
import router from "@/router/router";
import { Layout, Modal, Row, Col, Input, Button, BackTop } from "ant-design-vue";

let app = createApp(App)

app.use(Layout)
app.use(Modal)
app.use(Row)
app.use(Col)
app.use(Input)
app.use(Button)
app.use(BackTop)
app.use(store)
app.use(router)

app.mount('#app')
