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
          <a-col span="23">gg</a-col>
          <a-col span="1">
            <setting-outlined
              :spin="spin"
              style="font-size: 18px; float: right"
            />
          </a-col>
        </a-row>
      </a-layout-header>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { watch, Ref, ref, readonly } from "vue";
import { Options, Vue } from "vue-class-component";
import { SettingOutlined } from "@ant-design/icons-vue";
@Options({
  components: {
    SettingOutlined,
  },
})
export default class Skeleton extends Vue {
  spin : boolean = false;
  onSettings : boolean = false;
  w = watch(() => this.onSettings, (val : boolean, old : boolean)=>{
    this.spin = true;
    setTimeout(() => {
      this.spin = false;
    }, 400);
  });
}
</script>

<style lang="less" scoped>
@import "./style/skeleton.less";
</style>