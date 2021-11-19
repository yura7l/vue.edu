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
                },
                {
                    id: 2,
                    title: 'Question #3',
                    answers: [
                        {
                            id: 0,
                            value: 'Answer #3 First',
                            isCorrect: false,
                            isChecked: false
                        },
                        {
                            id: 1,
                            value: 'Answer #3 Second (correct)',
                            isCorrect: true,
                            isChecked: false
                        }
                    ],
                    type: 'single',
                    status: 0
                },
                {
                    id: 3,
                    title: 'Question #4',
                    answers: [
                        {
                            id: 0,
                            value: 'Answer #4 First (correct)',
                            isCorrect: true,
                            isChecked: false
                        },
                        {
                            id: 1,
                            value: 'Answer #4 Second',
                            isCorrect: false,
                            isChecked: false
                        },
                        {
                            id: 2,
                            value: 'Answer #4 Third',
                            isCorrect: false,
                            isChecked: false
                        }
                    ],
                    type: 'multiple',
                    status: 0
                },
                {
                    id: 4,
                    title: 'Question #5',
                    answers: [
                        {
                            id: 0,
                            value: 'Answer #5 First (correct)',
                            isCorrect: true,
                            isChecked: false
                        },
                        {
                            id: 1,
                            value: 'Answer #5 Second',
                            isCorrect: false,
                            isChecked: false
                        },
                        {
                            id: 2,
                            value: 'Answer #5 Third (correct)',
                            isCorrect: true,
                            isChecked: false
                        }
                    ],
                    type: 'multiple',
                    status: 0
                }
            ],
            scores: [],
            totalScore: 0,
            error: '',
            decidedToContinue: false,
            status: 0
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
            if(this.hasAnswer()){
                this.calcScore()
                this.currentQuestion.status = 1
                this.error = ''
                this.status = 1
                this.saveToStorage()
                localStorage.setItem('quizStarted', 'yes');
            }else{
                this.error = 'Choose answer to see next question!'
            }
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
                scoreSum += Number(this.scores[i])
            }
            this.totalScore = scoreSum
            localStorage.setItem('totalScore', this.totalScore);
            localStorage.removeItem('quizStarted');
        },
        hasAnswer(){
            let hasAnswer = false
            for (let i in this.currentQuestion.answers){
                if(this.currentQuestion.answers[i].isChecked){
                    hasAnswer = true
                    break
                }
            }
            return hasAnswer
        },
        saveToStorage(){
            localStorage.setItem('scores', this.scores.join('|'));
        },
        checkStorage(){
            return !!localStorage.getItem('quizStarted');
        },
        startOver(){
            this.status = 0
            this.totalScore = 0
            localStorage.removeItem('scores');
            localStorage.removeItem('totalScore');
            localStorage.removeItem('quizStarted');
            this.decidedToContinue = false
            window.location.reload()
        },
        continueQuiz(){
            this.scores = localStorage.getItem('scores').split('|')
            for(let i in this.scores){
                this.quizQuestions[i].status = 1
            }
            this.decidedToContinue = true
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