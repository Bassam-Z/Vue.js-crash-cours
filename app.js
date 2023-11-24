const app = Vue.createApp({
    //data, function
    // template:'<h2>I am  the Template</h2>'
    data(){
        return {
            title: 'The book Title',
            auther: 'Basam Ali',
            age: 30
        }
    },
    methods: {
        changeTitle(title) {
            //this.title = 'Vue.js Lerning'
            this.title = title
        }
    }
});

app.mount('#app')