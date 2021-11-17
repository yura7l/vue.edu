const AppQuiz = {
    data() {
        return {
            quizTitle: 'Quiz',
            quizQuestions: [
                {
                    id: 0,
                    title: 'Question #1',
                    answers: [
                        {
                            id: 0,
                            value: 'Answer #1 First (correct)',
                            isCorrect: true
                        },
                        {
                            id: 1,
                            value: 'Answer #1 Second',
                            isCorrect: false
                        },
                        {
                            id: 2,
                            value: 'Answer #1 Third',
                            isCorrect: false
                        }
                    ],
                    type: 'single',
                    status: 0
                },
                {
                    id: 1,
                    title: 'Question #2',
                    answers: [
                        {
                            id: 0,
                            value: 'Answer #2 First',
                            isCorrect: false
                        },
                        {
                            id: 1,
                            value: 'Answer #2 Second (correct)',
                            isCorrect: true
                        },
                        {
                            id: 2,
                            value: 'Answer #2 Third (correct)',
                            isCorrect: true
                        }
                    ],
                    type: 'multiple',
                    status: 0
                }
            ],
            quizAnswers: []
        }
    },
    methods: {
        applyAnswer(){

        }
    },
    computed: {
        currentQuestion(){
            for (let i in this.quizQuestions){
                if(!this.quizQuestions[i].status){
                    return this.quizQuestions[i]
                }
            }
            return []
        }
    }
}

Vue.createApp(AppQuiz).mount('#quiz')