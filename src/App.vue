<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import {useI18n} from 'vue-i18n'
export default class App extends Vue {
  setup() {
    console.log("GGSS");
    
    return {
      ...useI18n()
    }
  }
}
</script>

<style>
</style>
