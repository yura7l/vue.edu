const AppThird = {
    data() {
        return {
            todoTitle: 'To do list',
            todoPlaceholder: 'Enter new list item',
            todoEmpty: 'To do list is empty. Please add first item',
            todoValue: '',
            todoValueEdit: '',
            todoList: this.getList() ? JSON.parse(this.getList()) : []
        }
    },
    methods: {
        itemCreate(event) {
            if(this.todoValue){
                this.todoList.push({id: this.todoList.length, value: this.todoValue, status: 1, edit: false, error: false})
                this.todoValue = ''
            }
            this.setList()
        },
        itemRemove(i, event) {
            for(j in this.todoList){
                if(this.todoList[j].id === i){
                    this.todoList.splice(j, 1)
                    break
                }
            }
            this.setList()
        },
        itemChangeStatus(i, event) {
            for(j in this.todoList){
                if(this.todoList[j].id === i){
                    if(this.todoList[j].status === 1){
                        this.todoList[j].status = 2
                    }else{
                        this.todoList[j].status = 1
                    }
                    break
                }
            }
            this.setList()
        },
        itemEdit(i, event) {
            for(j in this.todoList){
                if(this.todoList[j].id === i){
                    this.todoList[j].edit = true
                    this.todoValueEdit = this.todoList[j].value
                }else{
                    if(this.todoList[j].edit === true){
                        this.todoList[j].edit = false
                        this.todoList[j].error = false
                    }
                }
            }
            this.setList()
        },
        itemSave(i, event) {
            if(this.todoValueEdit.length > 0){
                for(j in this.todoList){
                    if(this.todoList[j].id === i){
                        this.todoList[j].edit = false
                        this.todoList[j].value = this.todoValueEdit
                        this.todoList[j].error = false
                        break
                    }
                }
            }else{
                this.itemRemove(i, event)
            }
            this.setList()
        },
        itemCancel(i, event) {
            for(j in this.todoList){
                if(this.todoList[j].id === i){
                    this.todoList[j].edit = false
                    this.todoList[j].error = false
                    break
                }
            }
            this.setList()
        },
        getList(){
            return localStorage.getItem('toDoList')
        },
        setList(){
            localStorage.setItem('toDoList', JSON.stringify(this.todoList))
        }
    },
    computed: {

    },
    watch: {
        todoValue(value) {

        }
    }
}

Vue.createApp(AppThird).mount('#todolist')