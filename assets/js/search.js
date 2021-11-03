const AppSearch = {
    data() {
        return {
            searchTitle: 'Quick Search',
            searchPlaceholder: 'Start typing to search',
            articles: [
                {
                    id: 0,
                    date: '03.11.2021',
                    title: 'Building the next phase of GitHub, together',
                    picture: 'https://github.blog/wp-content/uploads/2019/01/Community@2x.png',
                    preview_text: 'This morning, I shared the following post with Hubbers in response to Nat’s announcement about his next adventure. I am thrilled to take on the role of CEO to build the next phase of GitHub for our global community of software developers.'
                },
                {
                    id: 1,
                    date: '06.10.2021',
                    title: 'GitHub Availability Report: September 2021',
                    picture: 'https://github.blog/wp-content/uploads/2021/06/education-thumb.png',
                    preview_text: 'In September, we experienced no incidents resulting in service downtime to our core services.'
                },
                {
                    id: 2,
                    date: '27.09.2021',
                    title: 'Partitioning GitHub’s relational databases to handle scale',
                    picture: 'https://github.blog/wp-content/uploads/2019/01/Engineering@2x.png',
                    preview_text: 'More than 10 years ago, GitHub.com started out like many other web applications of that time—built on Ruby on Rails, with a single MySQL database to store most of its data.'
                },
                {
                    id: 3,
                    date: '07.09.2021',
                    title: 'Increasing developer happiness with GitHub code scanning',
                    picture: 'https://github.blog/wp-content/uploads/2019/01/Enterprise@2x-2.png',
                    preview_text: 'You probably already know about using GitHub code scanning to secure your code. But how about using it to make your day-to-day coding easier?'
                },
                {
                    id: 4,
                    date: '11.08.2021',
                    title: 'GitHub’s Engineering Team has moved to Codespaces',
                    picture: 'https://github.blog/wp-content/uploads/2019/01/Insights@2x.png',
                    preview_text: 'Today, GitHub is making Codespaces available to Team and Enterprise Cloud plans on github.com. Codespaces provides software teams a faster, more collaborative development environment in the cloud. Read more on our Codespaces page.'
                },
                {
                    id: 5,
                    date: '12.07.2021',
                    title: 'Adding support for cross-cluster associations to Rails 7',
                    picture: 'https://github.blog/wp-content/uploads/2021/05/policy-thumbnail-1.png',
                    preview_text: 'Ever since we made the leap at GitHub to upgrade off our fork of Rails and worked hard to stay up to date with the latest releases, we’ve consistently looked for ways to improve the Rails framework upstream.'
                },
            ],
            searchQuery: '',
            viewType: 'list'
        }
    },
    methods: {
        changeView(type){
            this.viewType = type
        }
    },
    computed: {
        searchArticles(){
            let searchResult = []
            for (let i in this.articles){
                let titleLower = this.articles[i].title.toLowerCase(),
                    queryLower = this.searchQuery.toLowerCase()

                if(titleLower.indexOf(queryLower) >= 0){
                    searchResult.push(this.articles[i])
                }
            }
            return searchResult
        }
    },
    watch: {

    }
}

Vue.createApp(AppSearch).mount('#search')