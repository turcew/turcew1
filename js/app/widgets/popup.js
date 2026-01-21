export const popup = {
    data:function(){
        return {
            parent:"",

        }
    },
    mounted:function(){
        this.parent = this.$parent.$parent;

        }
    },
    methods:{

    },
    template:`
    popup
    `
};
