export const header = {
    data:function(){
        return {
            user: {},
            parent:"",
            active:0,
            menu:0
        }
    },
    watch:{
    },
    mounted(){
        this.parent = this.$parent.$parent.$parent;
    },
    methods:{
        
    },
    template:`
        <header class="header">
            <msg ref="msg"/>
        </header>
    `
};