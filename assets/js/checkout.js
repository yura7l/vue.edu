const AppCheckout = {
    data() {
        return {
            checkoutTitle: 'Select services',
            checkoutSumCaption: 'Sum',
            servicesList: [
                {
                    id: 0,
                    name: 'Design',
                    price: 300,
                    discount: 0,
                    added: false
                },
                {
                    id: 1,
                    name: 'Web development',
                    price: 400,
                    discount: 0,
                    added: false
                },
                {
                    id: 2,
                    name: 'Integration',
                    price: 250,
                    discount: 0,
                    added: false
                },
                {
                    id: 3,
                    name: 'Training',
                    price: 200,
                    discount: 0,
                    added: false
                }
            ]
        }
    },
    methods: {
        toggleService(serviceId){
            for(let i in this.servicesList){
                if(this.servicesList[i].id === serviceId){
                    this.servicesList[i].added = !this.servicesList[i].added;
                }
            }
        }
    },
    computed: {
        checkoutTotal(){
            let total = 0;
            for(let i in this.servicesList){
                if(this.servicesList[i].added){
                    total += this.servicesList[i].price
                }
            }
            return total
        }
    },
    watch: {

    }
}

Vue.createApp(AppCheckout).mount('#checkout')