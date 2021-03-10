<template>
  <div :class="{ 'has-logo': showLogo }">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in permisson_routes" :key='route.path' :item='route' :base-path='route.path'> </sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import variables from "@/styles/variables.scss";
import SidebarItem from "./SidebarItem";
export default {
  components:{SidebarItem},
  computed: {
    ...mapGetters(['permisson_routes']),
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    isCollapse() {
      return false;
    },
    variables(){
        return variables
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
  },
};
</script>
