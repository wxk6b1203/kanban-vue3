<template>
  <a-modal v-model:visible="onShow"> </a-modal>
</template>

<script lang="ts">

import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Settings",
  props: {
    show: {
      type: Boolean,
      default: false, // TODO: wait for v3 to fix the default boolean to false problem.
    },
  },
  setup(props, { emit }) {
    const onShow = computed({
      get: () => {
        return props.show;
      },
      set: (val: boolean) => {
        emit("update:show", val);
      },
    });
    return {
      onShow,
    };
  },
});
</script>

<style>
</style>