(async function () {

    let front = document.querySelector('.front > p');
    let back  = document.querySelector('.back > p');
    let card  = document.querySelector('div.card');

    document.querySelector('#btnPrev').addEventListener('click', prevCard);
    document.querySelector('#btnFlip').addEventListener('click', flipCard);
    document.querySelector('#btnNext').addEventListener('click', nextCard);
   
    let quiz = await getQuiz();

    /* test data
    let quiz = [
        {question:"Q#1", answer:"A#1"},
        {question:"Q#2", answer:"A#2"},
        {question:"Q#3", answer:"A#3"}
    ];
    */

    let current = -1;

    async function getQuiz() {
        let resp = await fetch('https://us-central1-quiz-eef08.cloudfunctions.net/getData');
        let respJson = await resp.json();
        return respJson;        
    }    

    function nextCard() {
        card.classList.remove('flipped');
        setTimeout(()=>{
            current = (current + 1) % quiz.length;            
            front.textContent = quiz[current].question;
            back.textContent = quiz[current].answer;
        }, 500);        
    }

    function prevCard() {
        card.classList.remove('flipped');
        setTimeout(()=>{
            current = Math.abs(current - 1) % quiz.length;            
            front.textContent = quiz[current].question;
            back.textContent = quiz[current].answer;
        }, 500);        
    }
    
    function flipCard() {
        card.classList.toggle('flipped');
    }

})();


