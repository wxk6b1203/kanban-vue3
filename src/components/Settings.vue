<template>
  <a-modal :title="t('settings')" :width="600" v-model:visible="onShow"> 
  </a-modal>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useI18n } from "vue-i18n";
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
      ...useI18n(),
    };
  },
});
</script>

<style>
</style>