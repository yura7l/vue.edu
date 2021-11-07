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
                    added: false
                },
                {
                    id: 1,
                    name: 'Web development',
                    price: 400,
                    added: false
                },
                {
                    id: 2,
                    name: 'Integration',
                    price: 250,
                    added: false
                },
                {
                    id: 3,
                    name: 'Training',
                    price: 200,
                    added: false
                }
            ],
            discount: 0
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
            let total = 0,
                selectedCount = 0,
                minPrice = 0,
                minPriceId = false;
            for(let i in this.servicesList){
                if(this.servicesList[i].added){
                    total += this.servicesList[i].price
                    selectedCount += 1;
                    if(!minPrice){
                        minPrice = this.servicesList[i].price
                        minPriceId = this.servicesList[i].id
                    }else{
                        if(this.servicesList[i].price < minPrice){
                            minPrice = this.servicesList[i].price
                            minPriceId = this.servicesList[i].id
                        }
                    }
                }
            }
            if(selectedCount > 2 && minPriceId !== false){
                if(selectedCount === 3){
                    this.discount = this.servicesList[minPriceId].price / 2
                }else if(selectedCount === 4){
                    this.discount = 150
                }
                total -= this.discount
            }else{
                this.discount = 0
            }
            return total
        }
    },
    watch: {

    }
}

Vue.createApp(AppCheckout).mount('#checkout')