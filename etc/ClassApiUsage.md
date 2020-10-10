## TS based Class API usage

```ts
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    show: Boolean,
  },
  emits: ["update:show"],
})
export default class Settings extends Vue {
  show!: boolean;

  public get onShow(): boolean {
    return this.show;
  }

  public set onShow(v: boolean) {
    this.$emit("update:show", v);
  }
}
```