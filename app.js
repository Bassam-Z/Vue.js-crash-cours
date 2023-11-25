const app = Vue.createApp({
    //data, function
    // template:'<h2>I am  the Template</h2>'
    data(){
        return {
            url: 'https://www.bassamz.com',
            showBooks : true,
            // fav: true,
            books: [
                { title: 'Angular lerning', auther: 'Arwa', age:32, img: '/assets/Vue.png', isFav: true },
                { title: 'React.js lerning', auther: 'Ali', age:31, img: '/assets/react.png', isFav: false},
                { title: 'Vue.js lerning', auther: 'Basam', age:30, img: '/assets/angular.png', isFav:  true },
            ]
            // title: 'The book Title',
            // auther: 'Basam Ali',
            // age: 30,
            // x:0,
            // y:0
        }
    },
    methods: {
        // changeTitle(title) {
        //     //this.title = 'Vue.js Lerning'
        //     this.title = title
        // },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleMakeFav(book) {
            book.isFav = !book.isFav
        }
        // handelEvante(e, data){
        //     console.log(e, e.type);
        //     if (data) {
        //         console.log(data)
        //     }
        // },
        // handleMousemove(e) {
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        // }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
});

app.mount('#app')