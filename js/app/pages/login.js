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
    <div class="container">

  <div class="left-area">
    <img class="bg-image" src="app/views/images/Cover_4.jpg" alt="background">
  </div>

  <div class="right-area">
    <div class="right-header">
      <div class="logo">
        <img src="app/views/images/logo.svg" alt="Dreamview Logo">
      </div>
      <h1>Dreamview Affiliate Sign in</h1>
    </div>

    <div class="form-wrapper">
      <div class="form-inner">
        <form action="/site/login" method="POST">
          <div class="form-row">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required autocomplete="email">
          </div>

          <div class="form-row">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required autocomplete="current-password">
          </div>

          <div class="form-row">
            <button type="submit" class="btn">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

`};
