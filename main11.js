Vue.component ('tabs', {
    
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <!-- <li class="is-active"><a>Pictures</a></li> -->
                    <!-- <li><a>Music</a></li> -->
                    <!-- <li><a>Videos</a></li> -->
                    <!-- <li><a>Documents</a></li> -->

                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,

    // mounted() {
    //     console.log(this.$children);
    // }
    data() {
        return { tabs: [] };
    },


    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            // alert('Now Selecting...');
            this.tabs.forEach(tab=> {
                tab.isActive = (tab.name == selectedTab.name);

            });
        }
    }

});

Vue.component('tab', {
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,

    props: {
        name: { required: true },
        selected: { default: false }
    },

    data() {

        return {
            isActive: false
        };
        isActive: false
    },

    computed: {
        href() {
            // about-our-culture
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {
        this.isActive = this.selected;
    },

    
});

new Vue({
    el: '#root'

});