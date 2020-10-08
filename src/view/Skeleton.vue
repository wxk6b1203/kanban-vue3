<template>
  <a-layout class="kanban-skeleton">
    <a-layout-sider theme="light" width="80" class="kanban-skeleton-sider">
      gg
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="kanban-skeleton-header">
        <a-row
          type="flex"
          justify="center"
          align="middle"
          style="height: 100%; padding: 12px"
        >
          <a-col span="23">
            <router-view name="header"></router-view>
          </a-col>
          <a-col span="1">
            <setting-outlined
              :spin="spin"
              @click="toggleSettings"
              style="font-size: 18px; float: right"
            />
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content>
        <router-view name="content"></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
// import { watch } from "vue";
import { Options, Vue } from "vue-class-component";
import { SettingOutlined } from "@ant-design/icons-vue";

@Options({
  components: {
    SettingOutlined,
  },
})
export default class Skeleton extends Vue {
  spin: boolean = false;
  onSettings: boolean = false;

  spining() {
    this.spin = true;
      setTimeout(() => {
        this.spin = false;
      }, 400);
  }

  toggleSettings() {
    this.spining();
  }
}
</script>

<style lang="less" scoped>
@import "./style/skeleton.less";
</style>