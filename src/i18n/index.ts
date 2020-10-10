import * as lang from './locale'
import { createI18n, VueI18nOptions } from "vue-i18n";

let iv : VueI18nOptions = {
    locale: "enUS",
    messages: {
        zhCN: lang.zhCN,
        enUS: lang.enUS
    }
}

export default createI18n(iv)