const app = new Vue({
    el: '#root',
    data: {
        strTodo: '',

        newTodo: {
            text:'',
            done: true,
        },

        todosList:
        [
            {
                text: 'Studiare javascript',
                done: false,
            },
            {
                text: 'Fare esercizio',
                done: false,
            },
            {
                text: 'Andare in palestra',
                done: false,
            },
        ],
    },
    methods: {
        deleteTodo(index) {
            this.todosList.splice(index, 1);
        },

        addTodo() {
            if(this.newTodo != '') {
                this.newTodo.text == this.strTodo;
                this.todosList.push(this.newTodo)
                this.newTodo = {
                    text: '',
                    done: false, 
                    //sono stato aiutato perche' non ci sarei arrivato da solo! perbacco!
                }
            }
        },

        todoDone() {
            if(todoList.done == 'true'){
                // sbarrare
            } else {
                // togliere barra \ tornare false
            }
        },
    }
});