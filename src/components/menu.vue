<template>
    <div class="content-wrap clearfix">
      <div class="f-l">
        <ul>
          <!--<li><router-link to="/menu1">菜单一</router-link></li>-->
          <!--<li><router-link to="/menu2">菜单二</router-link> </li>-->
          <!--<li><router-link to="/menu3">菜单三</router-link></li>-->
          <li v-for="(item,index) in menu" :class="{active:checkIndex === index}" @click="changeNav(index)">
            <router-link :to="item.router">{{item.name}}</router-link>
            <div class="user-list">
              <div class="list" @click="getUserInfo(index)" v-for="(it,index) in item.children">{{it.name}} page {{it.page}}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="f-r">
        <!--我是{{$route.params.id}}-->
        <router-view ref="ch" :userInfos="userInfo" @getCount="getCount"></router-view>
      </div>
    </div>
</template>

<script>
    export default {
      name: "menu",
      data() {
        return {
          menu: [
            {
              name: '菜单一',
              router: '/menu1',
              children: [
                {name: '欢欢', id: '12345', page: 1},
                {name: '米米', id: '12346', page: 1},
                {name: '乐乐', id: '12347', page: 1}
              ]
            },
            {
              name: '菜单二',
              router: '/menu2'
            },
            {
              name: '菜单三',
              router: '/menu3'
            },
          ],
          userInfo: {},
          page: '',
          checkIndex: 0
        }
      },
      mounted: function () {
        this.page = this.$refs.ch.page
        console.log(this.page);
      },
      methods: {
        getUserInfo(index) {
          this.userInfo = this.menu[0].children[index]
        },
        getCount(val) {
          this.page = val
        },
        changeNav(index) {
          this.checkIndex = index
        }
      }
    }
</script>

<style scoped lang="scss">
.content-wrap {
  /*margin: auto;*/
  /*width: 1080px;*/
  height: 100%;
  >.f-l {
    width: 20%;
    height: 100%;
    background-color: #f5f5f5;
  }
  >.f-r {
    width: 79%;
    height: 100%;
    background-color: #f5f5f5;
  }
  li {
    /*padding: 10px 0 10px 10px;*/
    /*text-align: center;*/
    cursor: pointer;
    border-bottom: 1px solid #fff;
    a {
      padding: 10px 0 10px 10px;
      display: inline-block;
      width: 100%;
      box-sizing: border-box;
    }
  }
  li.active {
    a {
      background-color: #42b983;
      color: #fff;
    }
    .user-list {
      height: auto;
      transition: height .5s linear;
    }
  }
  .user-list {
    padding-left: 20px;
    height: 0;
    overflow: hidden;
    transition: height .5s linear;
    .list {
      padding: 10px 0;
    }
    .list:hover {
      color: #42b983;
    }
  }
}
</style>
