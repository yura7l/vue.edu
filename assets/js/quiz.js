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
                            isCorrect: true,
                            isChecked: false
                        },
                        {
                            id: 1,
                            value: 'Answer #1 Second',
                            isCorrect: false,
                            isChecked: false
                        },
                        {
                            id: 2,
                            value: 'Answer #1 Third',
                            isCorrect: false,
                            isChecked: false
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
                            isCorrect: false,
                            isChecked: false
                        },
                        {
                            id: 1,
                            value: 'Answer #2 Second (correct)',
                            isCorrect: true,
                            isChecked: false
                        },
                        {
                            id: 2,
                            value: 'Answer #2 Third (correct)',
                            isCorrect: true,
                            isChecked: false
                        }
                    ],
                    type: 'multiple',
                    status: 0
                }
            ],
            scores: [],
            totalScore: 0
        }
    },
    methods: {
        toggleAnswer(answerId){
            for (let i in this.currentQuestion.answers){
                if(this.currentQuestion.answers[i].id === answerId){
                    this.currentQuestion.answers[i].isChecked = true
                    break
                }
            }
        },
        applyAnswer(){
            this.calcScore()
            this.currentQuestion.status = 1
        },
        calcScore(){
            if(this.currentQuestion.type === 'single'){
                for (let i in this.currentQuestion.answers){
                    if(this.currentQuestion.answers[i].isCorrect){
                        this.scores[this.currentQuestion.id] = Number(this.currentQuestion.answers[i].isChecked)
                        break
                    }
                }
            }else{
                let correctAnswers = 0,
                    correctAnswersChecked = 0
                for (let i in this.currentQuestion.answers){
                    if(this.currentQuestion.answers[i].isCorrect){
                        ++correctAnswers
                        if(this.currentQuestion.answers[i].isChecked){
                            ++correctAnswersChecked
                        }
                    }
                }
                this.scores[this.currentQuestion.id] = correctAnswersChecked / correctAnswers
            }
        },
        calcTotalScore(){
            let scoreSum = 0
            for (let i in this.scores) {
                scoreSum += this.scores[i]
            }
            this.totalScore = scoreSum
        }
    },
    computed: {
        currentQuestion(){
            for (let i in this.quizQuestions){
                if(!this.quizQuestions[i].status){
                    return this.quizQuestions[i]
                }
            }
            this.calcTotalScore()
            return []
        }
    },
    watch: {

    }
}

Vue.createApp(AppQuiz).mount('#quiz')