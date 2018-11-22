let vm = new Vue({
    el: '#app',
    data() {
        return {
            activedMenu: '首页',
            tabArr: [{
                name: '首页',
                url: './home.html',
                show: true
            }]
        }
    },
    methods: {
        /**
         *点击侧边菜单
         *
         * @param {*} name
         */
        toggleMenu(name) {
            let tab = this.getTab(name);
            console.log([...this.tabArr])
            console.log(tab)
            
            if(!tab){
                // 创建新tab
                let tb = {}
                tb.name = name;
                tb.url = this.$refs[name].$attrs.url;
                tb.show = true;
                this.tabArr.push(tb)
            }else{
                if(tab.show){
                    return
                }else{
                    tab.show = true;
                }
            }
            // if (!this.tabIsExist(name)) {
            //     let tab = {}
            //     tab.name = name;
            //     tab.url = this.$refs[name].$attrs.url;
            //     tab.show = true;
            //     this.tabArr.push(tab)
            // } else {
            //     if(this.getTabStatus(name)){

            //     }
            //     this.tabArr
            // }
            this.activedMenu = name;
        },
        /**
         *判断tab是否已经打开
         *
         * @param {*} name
         * @returns
         */
        tabIsExist(name) {
            let exist = false;
            for (let i = 0; i < this.tabArr.length; i++) {
                exist = name === this.tabArr[i].name ? true : false
                if (name === this.tabArr[i].name) {
                    exist = true;
                    break;
                }
            }
            console.log(exist)
            return exist;
        },
        getTabStatus(name) {
            for (let i = 0; i < this.tabArr.length; i++) {
                if (this.tabArr[i].name === name) return this.tabArr[i].show
                break;
            }
        },
        getTab(name){
            console.log(name)
            let tab;
            for (let i = 0; i < this.tabArr.length; i++) {
                if (this.tabArr[i].name === name){
                    tab = this.tabArr[i];
                }else{
                    tab = null;
                }
            }
            return tab;
        },
        /**
         *删除tab
         *
         * @param {*} name
         */
        removeTab(name) {
            // console.log(name)
            let arr = [...this.tabArr];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].name === name) {
                    arr[i].show = false;
                }
            }
            // console.log(arr)
            // this.activedMenu = this.tabArr[this.tabArr.length -1].name
            this.tabArr = arr;
            console.log(this.tabArr)
        },
        /**
         *切换tab
         *
         * @param {*} name
         */
        changeTab(name) {
            this.activedMenu = name;
            console.log(this.activedMenu)
        },
        // beforeRemove(index){
        //     this.tabArr.splice(index,1)
        //     console.log('beforeRemove')
        //     console.log(name)
        // }
    },
    computed: {

    },
    components: {}
})