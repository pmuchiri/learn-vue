<<<<<<< HEAD
window.Event = new Vue(); 


Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {
            Event.$emit('applied');
        }
    }
});

new Vue({
    el: '#root',
    
    data: {
        couponApplied: false
    },
      
    created() {
        Event.$on('applied', () => alert('Handling It!'))
    }
=======
window.Event = new Vue(); 


Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {
            Event.$emit('applied');
        }
    }
});

new Vue({
    el: '#root',
    
    data: {
        couponApplied: false
    },
      
    created() {
        Event.$on('applied', () => alert('Handling It!'))
    }
>>>>>>> fd9ed0cfa7fe8df769bd019a2f7c9ac6f64eb111
});