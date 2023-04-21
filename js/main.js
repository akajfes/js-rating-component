//get rating
let numberBtn = document.querySelector('.number');
let submitBtn = document.querySelector('.submit-btn');
let numberContainer = document.querySelector('.number-container');
let containerClick = '';

numberContainer.addEventListener("click", (evt) => {   
    if (evt.target.classList.contains('number')) {
        containerClick = evt.target.innerHTML;
    }
});

submitBtn.addEventListener("click", (evt) => {
    let ratingStart = document.querySelector('.rating-start');

    if (containerClick > 0) {
        ratingStart.innerHTML = `
        <p>You selected ${containerClick} out of 5</p>
      
        <p>Thank you!</p>
      
        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
        don't hesitate to get in touch!</p>
        `
    }
});