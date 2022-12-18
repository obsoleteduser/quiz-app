const quizCard = document.querySelector('.quiz-card')
const questionField = document.querySelector('.quiz-question')
const quizAnswersField = document.querySelector('.quiz-answers')
const modal = document.querySelector('.overlay')
const restart = document.querySelector('.restart')
const answerA = document.querySelector('.a')
const answerB = document.querySelector('.b')
const answerC = document.querySelector('.c')
const answerD = document.querySelector('.d')

let correctAnswers = 0

window.addEventListener('load', ()=>{
    loadGame()

})

const loadGame = async () => {
    questionField.innerHTML = ''
    const pickCountry = ~~(Math.random() * 249)
    const switchQuestion = ~~(Math.random() * 2)
    const data = await network.get()
    quizAnswersField.querySelectorAll('div').forEach(answer => {
        answer.classList.remove('correct')
        answer.classList.remove('wrong')
    })

    if (switchQuestion) {
        questionField.textContent = `${data.data[pickCountry].capital} is capital of`
        quizAnswersField.querySelectorAll('div')
            .forEach(answer => {
                answer.textContent = data.data[~~(Math.random() * 249)].name.common
            })
        quizAnswersField.querySelectorAll('div')[~~(Math.random() * 4)].textContent = data.data[pickCountry].name.common
            
    } else {
        questionField.innerHTML = `<img src=${data.data[pickCountry].flags.svg}> <span>Whicih country does this flag belong to?</span>`
        quizAnswersField.querySelectorAll('div')
            .forEach(answer => {
                answer.textContent = data.data[~~(Math.random() * 249)].name.common
            })
        quizAnswersField.querySelectorAll('div')[~~(Math.random() * 4)].textContent = data.data[pickCountry].name.common


    }


    //Validation

    quizAnswersField.querySelectorAll('div')
        .forEach(answer => {
            
            answer.addEventListener('click', (event) => {
        
                console.log(event.target)
    
                
                if (event.target.textContent === data.data[pickCountry].name.common) {
                    quizAnswersField.querySelectorAll('div').forEach(answer => {
                        answer.classList.remove('correct')
                        answer.classList.remove('wrong')
                    })
                    answer.classList.add('correct')
                    correctAnswers++
                    setTimeout(()=>{loadGame()}, 1500)
                }
                else {
                
                    quizAnswersField.querySelectorAll('div').forEach(answer => {
                        answer.classList.remove('correct')
                        answer.classList.remove('wrong')
                        
                    })
                    answer.classList.add('wrong')
                    
                

                    quizAnswersField.querySelectorAll('div')
                        .forEach(answer => {
                            if (answer.textContent === data.data[pickCountry].name.common) answer.classList.add('correct')
                        })



                }
            })
        })



}




