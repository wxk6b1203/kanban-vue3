<template>
  <a-modal v-model:visible="modalShow"> </a-modal>
</template>

<script lang="ts">
import { reactive, Ref, toRef } from "vue";
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    show: Boolean,
  },
  emits: ["update:show"],
})
export default class Settings extends Vue {
  show!: Boolean;
  setup() {
    let onShow = reactive({ show: false });
  }
}
</script>

<style>
</style>