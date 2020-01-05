<<<<<<< HEAD
Vue.component('task-list', {
    // template: '<li>Foobar</li>'
    // template: '<li><slot></slot></li>',
    template: `
    
    <div>
        <task v-for="task in tasks">{{ task.task }}</task>
    </div>

    `,
    

    data() {
        return {
            tasks: [
                { task: 'Go to the store', complete: true },
                { task: 'Go to the mall', complete: false },
                { task: 'Go to the golf course', complete: true },
                { task: 'Go to Washington DC', complete: false }
            ]
        };
    }

});

Vue.component('task', {
    template: '<li><slot></slot></li>',

});



new Vue({
    el: '#root'

=======
Vue.component('task-list', {
    // template: '<li>Foobar</li>'
    // template: '<li><slot></slot></li>',
    template: `
    
    <div>
        <task v-for="task in tasks">{{ task.task }}</task>
    </div>

    `,
    

    data() {
        return {
            tasks: [
                { task: 'Go to the store', complete: true },
                { task: 'Go to the mall', complete: false },
                { task: 'Go to the golf course', complete: true },
                { task: 'Go to Washington DC', complete: false }
            ]
        };
    }

});

Vue.component('task', {
    template: '<li><slot></slot></li>',

});



new Vue({
    el: '#root'

>>>>>>> a584945ed6e6a68eb058163ca4b7cbd627a42c2f
})