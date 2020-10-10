## i18n usage

In this repo or case, the i18n plugin does not act like official examples. k-v are directly used on LocaleMessageDictionary.

official example:
```js
messages: {
    en: {
        message: {
            // ...
        }
    },
    zh: {
        message: {
            // ...
        }
    }
}
```

current example:
```ts
message: {
    en: {
        hello: "Hello",
        world: "World"
    },
    zh: {
        hello: "你好",
        world: "世界"
    }
}
```