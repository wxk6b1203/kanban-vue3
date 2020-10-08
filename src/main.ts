import { createApp } from 'vue'
import App from './App.vue'
import { Layout, Modal, Row, Col, Input, Button, BackTop } from "ant-design-vue";

let app = createApp(App)

app.use(Layout)
app.use(Modal)
app.use(Row)
app.use(Col)
app.use(Input)
app.use(Button)
app.use(BackTop)

app.mount('#app')
