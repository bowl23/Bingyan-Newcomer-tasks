const main = new Vue({
    el: '#main',
    data: {
        hello: 'hello',
        list: [
            { id: 1, thing: 'a' },
            { id: 2, thing: 'b' },
            { id: 3, thing: 'c' },
            { id: 4, thing: 'd' },
            { id: 5, thing: 'e' }
        ]
    },
    methods: {

    },
});
console.log(main.hello);