export const msg = {
    data:function(){
        return {
            alert:"",
            success:"",
            t1:"",
            t2:"",
            //confirmTitle:"Please confirm next action",
            //confirm:"",
            code:0,
            interval:""
        }
    },
    watch:{
    },
    mounted(){
        this.parent = this.$parent.$parent.$parent;
    },
    methods:{
        fadeIn(el, timeout, display){
            el.style.opacity = 0;
            el.style.display = display || "block";
            el.style.transition = `opacity ${timeout}ms`;
            setTimeout(() => {
                el.style.opacity = 1;
            }, 10);
        },
        fadeOut(el, timeout){
            el.style.opacity = 1;
            el.style.transition = `opacity ${timeout}ms`;
            el.style.opacity = 0;

            setTimeout(() => {
                el.style.display = "none";
            }, timeout);
        },
        successFun(msg){
            this.success = msg;

            var self = this;
            if(document.getElementById('.succsessMsg')) document.querySelector('.succsessMsg').style = "";
            clearTimeout(self.t1);
            clearTimeout(self.t2);
            self.t1 = setTimeout(function(){
                const block = document.querySelector('.succsessMsg');
                self.fadeIn(block, 1000, 'flex');
                self.t2 = setTimeout(function(){
                    self.fadeOut(block, 1000);
                }, 3000);
            },100);
        }
    },
    template:`
    <div class="alertMsg" v-if="alert">
        <div class="wrapper al">
            <i class="fas fa-times-circle"></i> {{alert}}
        </div>
    </div>
    <div class="succsessMsg" v-if="success">
        <div class="wrapper al">
            <i class="fas fa-check-circle"></i> {{success}}
        </div>
    </div>
    `
}
