export const login = {
    data:function(){
        return {
            img:1,
            hs:0,
            parent:''
        }
    },
    mounted:function(){
        this.img = this.randomIntFromInterval(1,7);
        this.parent = this.$parent.$parent;
    },
    methods:{
        randomIntFromInterval:function(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        login:function(){
            var self = this;
            var data = self.parent.toFormData(self.parent.formData);

            axios.post(this.parent.url+"/site/login", data).then(function(response){
                if(response.data.error){
                    self.$refs.msg.alertFun(response.data.error);
                }
                if(response.data.user){
                    self.parent.user = response.data.user;
                    self.parent.page('/campaigns');
                    window.localStorage.setItem("user", JSON.stringify(response.data.user));
                }
            }).catch(function(error){
                console.log('errors: ', error);
            });
        },
    },
    template:`
    <div class="flex">
        asdsadsa
    </div>
`};