Vue.component('task', {
    // template: '<li>Foobar</li>'
    template: '<li><slot></slot></li>',
data() {
    return {
        message: 'Vision 2020'
    };
}

});

new Vue({
    el: '#root'

});