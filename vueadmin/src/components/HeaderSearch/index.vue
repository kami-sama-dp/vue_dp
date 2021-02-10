<template>
    <div>
        <svg-icon class-name='search-icon' icon-class='search' @click.stop='click'/>
        <el-select
        ref='headerSearchSelect'
        v-model="search"
        :remote-method="querySearch"
        filterable remote
        placeholder="Search"
        class="header-search-select"
        @change="change"
        >
        <el-option v-for="item in options" :key="item.path" :value='item' :label="item.title.join('>')"></el-option>
        </el-select>
    </div>
</template>

<script>
import Fues from 'fuse.js';
import path from 'path'
export default {
    name: 'HeaderSearch',
    data(){
        return {
            search:'',
            options:[],
            serachPool:[],
            show: false,
            fuse: undefined
        }
    },
    computed:{
        routes(){
            return this.$store.getters.permisson_routes
        }
    },
    created(){
        this.serachPool = this.generateRoutes(this.routes)
    },
    watch:{
        routes(){

        },
        serachPool(){
        }
    },
    methods:{
        click(){
            this.show = !this.show
            if(this.show){
                this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.focus()
            }
        },
        change(val){
            console.log(this.$route)
            this.$route.push(val)
             console.log(this.$route)
        },
        querySearch(query){
            if(query!=''){
            this.options = this.fuse.search(query)
            }else{
                this.options =[]
            }     
        },
        generateRoutes(routes, basePath='/', prefixTitle=[]){
            console.log(routes)
            for(let route of routes){
                if(route.hidden){continue}
                const data = {
                    path: path.resolve(basePath, route.path),
                    title: [...prefixTitle]
                }
                if(route.meta&&route.meta.title){
                    data.title = [...data.title, route.meta.title]
                }
            }
        }

    }
}
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;

  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
