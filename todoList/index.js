const main = new Vue({
    el: '#main',
    data: {
        hello: 'hello',
        list: [],
        todoname: '',
        length: 0,
    },
    methods: {
        del(id) {
            this.list = this.list.filter(item => item.id != id);
        },
        add() {
            this.length++;
            this.list.push({
                id: this.length,
                thing: this.todoname
            });
            this.todoname = '';
        },
    },

});
console.log(main.hello);