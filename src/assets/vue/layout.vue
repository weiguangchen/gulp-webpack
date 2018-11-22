<template>
    <div>
        <div class="layout__menu">
            <i-menu :active-name="activedMenu.id" :open-names="['1']" @on-select='toggleMenu'>
                <Submenu name="1">
                    <template slot="title">
                        {{activedMenu.title}}
                    </template>
                    <menu-item name="1-1">{{activedMenu.title}}</menu-item>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        分类1
                    </template>
                    <menu-item name="2-1">页面1</menu-item>
                    <menu-item name="2-2">页面2</menu-item>
                    <Submenu name="3">
                        <template slot="title">Submenu</template>
                        <menu-item name="3-1">Option 7</menu-item>
                        <menu-item name="3-2">Option 8</menu-item>
                    </Submenu>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        Navigation Three
                    </template>
                    <menu-item name="4-1">Option 9</menu-item>
                    <menu-item name="4-2">Option 10</menu-item>
                    <menu-item name="4-3">Option 11</menu-item>
                    <menu-item name="4-4">Option 12</menu-item>
                </Submenu>
            </i-menu>
        </div>
        <div class="layout__tab">
            <Tabs type="card" closable>
                <tab-pane label="标签一">
                    <iframe src="./table.html" frameborder="0"></iframe>
                </tab-pane>
            </Tabs>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activedMenu: {
          id:'1-1',
          title:'首页'
      },
      tabArr: ['1-2']
    };
  },
  methods:{
      toggleMenu(name){
          console.log(name)
      }
  },
  components: {}
};
</script>

<style lang='scss'>
</style>