const AppThird = {
    data() {
        return {
            appThirdTitle: 'Checklist',
            appThirdPlaceholder: 'Enter new list item',
            appThirdEmpty: 'To do list is empty. Please add first item',
            appThirdValue: '',
            todoList: [
                {id: 0, value: 'Lorem ipsum dolor', status: 1, edit: false},
                {id: 1, value: 'Lorem ipsum dolor', status: 1, edit: false}
            ]
        }
    },
    methods: {
        itemCreate(event) {
            if(this.appThirdValue){
                this.todoList.push({id: this.todoList.length, value: this.appThirdValue, status: 1})
                this.appThirdValue = ''
            }
        },
        itemRemove(i, event) {
            for( let j = 0; j < this.todoList.length; j++){
                if(this.todoList[j].id === i){
                    this.todoList.splice(j, 1)
                    break
                }
            }
        },
        itemChangeStatus(i, event) {
            if(this.todoList[i].status === 1){
                this.todoList[i].status = 2
            }else{
                this.todoList[i].status = 1
            }
        },
        itemEdit(i, event) {
            this.todoList[i].edit = true
        },
        itemSave(i, event) {
            console.log(111)
            this.todoList[i].edit = false
        },
        itemCancel(i, event) {
            this.todoList[i].edit = false
        },
        itemChange(i, event) {

        }
    },
    computed: {

    },
    watch: {
        appThirdValue(value) {

        }
    }
}

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

Vue.createApp(AppThird).mount('#app_third')

Vue.createApp(AppFirst).mount('#app_first')

Vue.createApp(AppSecond).mount('#app_second')