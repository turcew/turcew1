export const campaigns = {
    data:function(){
        return {
            parent:"",

        }
    },
    mounted:function(){
        this.parent = this.$parent.$parent;

        if(!this.parent.user){
            this.parent.logout();
        }
    },
    methods:{

    },
    template:`
    Campaigns
    `
};
