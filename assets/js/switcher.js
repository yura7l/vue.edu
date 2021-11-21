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
            state: this.checkState(),
        }
    },
    methods: {
        toggleSwitcher(state){
            this.state = state
            localStorage.setItem('switcher_state', state)
        },
        checkState(){
            let storageState = localStorage.getItem('switcher_state')
            if(storageState){
                return storageState
            }else{
                return 'auto'
            }
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