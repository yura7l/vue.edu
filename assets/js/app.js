const AppFirst = {
    data() {
        return {
            appFirstTitle: 'Counter',
            appFirstCounter: 0
        }
    }
}

const AppSecond = {
    data() {
        return {
            appSecondTitle: 'Notes list',
            appSecondPlaceholder: 'Enter new note',
            appSecondValue: '',
            notesList: [
                'First',
                'Second'
            ]
        }
    },
    methods: {
        noteCreate(event) {
            if(this.appSecondValue){
                this.notesList.push(this.appSecondValue)
                this.appSecondValue = ''
            }
        },
        noteRemove(i, event) {
            this.notesList.splice(i, 1)
        },
        textUppercase(value) {
            return value.toUpperCase()
        }
    },
    computed: {
        doubleCountComputed() {
            console.log('doubleCountComputed')
            return this.notesList.length * 2
        }
    },
    watch: {
        appSecondValue(value) {
            if(value.length > 10){
                this.appSecondValue = this.appSecondValue.substr(0, 10)
            }
        }
    }
}

Vue.createApp(AppFirst).mount('#app_first')

Vue.createApp(AppSecond).mount('#app_second')