const app = new Vue({
    el: '#root',
    data: {
        newTodo: '',
        todosList: 
        [
            {
                name: 'Studiare javascript',
                boolean: true,
            },
            {
                name: 'Fare esercizio',
                boolean: true,
            },
            {
                name: 'Andare in palestra',
                boolean: true,
            },            
        ]
    },
    methods: {
        deleteTodo(index) {
            this.todosList.splice(index, 1);
        },

        addTodo() {
            if(this.newTodo != '') {
                this.todosList.name.push(this.newTodo);
                this.newTodo = '';
            }
        },

        todoDone() {
            //funzione per barrare ma non ho idea di come farla
        }
    }
});