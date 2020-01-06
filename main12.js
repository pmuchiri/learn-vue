<<<<<<< HEAD
Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {
            // alert('Applied!');
            this.$emit('applied');
        }
    }
});

new Vue({
    el: '#root',
    
    data: {
        couponApplied: false
    },

    methods: {
        onCouponApplied(){
            //   alert('It was applied!');
        this.couponApplied = true;
        }
    }
});

=======
Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {
            // alert('Applied!');
            this.$emit('applied');
        }
    }
});

new Vue({
    el: '#root',
    
    data: {
        couponApplied: false
    },

    methods: {
        onCouponApplied(){
            //   alert('It was applied!');
        this.couponApplied = true;
        }
    }
});

>>>>>>> fd9ed0cfa7fe8df769bd019a2f7c9ac6f64eb111
