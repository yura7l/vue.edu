const AppSwitcher = {
    data() {
        return {
            options: [
                {
                    id: 'light',
                    title: 'Light'
                },
                {
                    id: 'auto',
                    title: 'Auto'
                },
                {
                    id: 'dark',
                    title: 'Dark'
                }],
            state: 'auto',
        }
    },
    methods: {
        toggleSwitcher(state){
            this.state = state
            console.log(this.state)
        }
    },
    computed: {

    },
    watch: {

    }
}

Vue.createApp(AppSwitcher).mount('#switcher')

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}