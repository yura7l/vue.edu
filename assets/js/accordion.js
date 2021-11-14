const AppAccordion = {
    data() {
        return {
            accordionTitle: 'Accordion',
            accordionList: [
                {
                    id: 0,
                    title: 'Accordion Item #1',
                    body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',
                    state: 'opened'
                },
                {
                    id: 1,
                    title: 'Accordion Item #2',
                    body: '<strong>This is the second item\'s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',
                    state: 'closed'
                },
                {
                    id: 2,
                    title: 'Accordion Item #3',
                    body: '<strong>This is the third item\'s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',
                    state: 'closed'
                }
            ]
        }
    },
    methods: {
        toggleItem(itemId, event){
            let itemContainer = event.target.closest('.accordion__item'),
                itemBodyInner = itemContainer.querySelector('.accordion__item-body-inner')
            if(itemBodyInner && itemBodyInner.clientHeight){
                for(let i in this.accordionList){
                    if(this.accordionList[i].id === itemId){
                        if(this.accordionList[i].state === 'closed'){
                            this.accordionList[i].state = 'opened';
                            itemContainer.querySelector('.accordion__item-body').style.height = itemBodyInner.clientHeight + 'px'
                        }else{
                            this.accordionList[i].state = 'closed';
                            itemContainer.querySelector('.accordion__item-body').style.height = 0
                        }
                    }
                }
            }
        }
    },
    computed: {

    },
    watch: {

    }
}

Vue.createApp(AppAccordion).mount('#accordion')