const app = new Vue({
    el: '#root',
    data: {
        strTodo: '',

        newTodo: {
            text:'',
            done: false,
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
                this.todosList.unshift(this.newTodo)
                this.newTodo = {
                    text: '',
                    done: false,
                    //sono stato aiutato perche' non ci sarei arrivato da solo! perbacco!
                }
            }
        },
    }
});