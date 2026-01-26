export var toogle = {
    data: function(){
        return{
            value:""
        }
    },
    watch:{
        modelValue:function(o,n){
            this.value = this.modelValue;
        }
    },
    mounted(){
        this.value = this.modelValue;
    },
    methods:{
        change(){
            this.$emit('update:modelValue', this.value.toString());
        }
    },
    props:{
        modelValue: String
    },

    template:`
        <label class="switch">
            <input type="checkbox" v-model="value" @change="change()">
            <span class="slider round"></span>
        </label>
    `
};