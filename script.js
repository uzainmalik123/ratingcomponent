let sectionOne = document.getElementById('section-1');
let sectionTwo = document.getElementById('section-2');
let sumbitBtn = document.getElementById('submit-button');
let ratingOne = document.getElementById('rating-1');
let ratingOneVal = ratingOne.getAttribute('value');
let ratingTwo = document.getElementById('rating-2');
let ratingTwoVal = ratingTwo.getAttribute('value');
let ratingThree = document.getElementById('rating-3');
let ratingThreeVal = ratingThree.getAttribute('value');
let ratingFour = document.getElementById('rating-4');
let ratingFourVal = ratingFour.getAttribute('value');
let ratingFive = document.getElementById('rating-5');
let ratingFiveVal = ratingFive.getAttribute('value');
let changeText = document.getElementById('change-text');

ratingOne.addEventListener('click', () => {
    ratingOneVal = 'active';
    ratingTwoVal = 'notactive';
    ratingThreeVal = 'notactive';
    ratingFourVal = 'notactive';
    ratingFiveVal = 'notactive';
    changeRating();
})
ratingTwo.addEventListener('click', () => {
    ratingOneVal = 'notactive';
    ratingTwoVal = 'active';
    ratingThreeVal = 'notactive';
    ratingFourVal = 'notactive';
    ratingFiveVal = 'notactive';
    changeRating();
})
ratingThree.addEventListener('click', () => {
    ratingOneVal = 'notactive';
    ratingTwoVal = 'notactive';
    ratingThreeVal = 'active';
    ratingFourVal = 'notactive';
    ratingFiveVal = 'notactive';
    changeRating();
})
ratingFour.addEventListener('click', () => {
    ratingOneVal = 'notactive';
    ratingTwoVal = 'notactive';
    ratingThreeVal = 'notactive';
    ratingFourVal = 'active';
    ratingFiveVal = 'notactive';
    changeRating();
})
ratingFive.addEventListener('click', () => {
    ratingOneVal = 'notactive';
    ratingTwoVal = 'notactive';
    ratingThreeVal = 'notactive';
    ratingFourVal = 'notactive';
    ratingFiveVal = 'active';
    changeRating();
})

const changeRating = () => {
    if(ratingOneVal == 'active'){
        ratingOne.style.backgroundColor = 'hsl(25, 97%, 53%)'
        ratingOne.style.color = '#fff'
        ratingTwo.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingTwo.style.color = 'hsl(217, 12%, 63%)'
        ratingThree.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingThree.style.color = 'hsl(217, 12%, 63%)'
        ratingFour.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingFour.style.color = 'hsl(217, 12%, 63%)'
        ratingFive.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingFive.style.color = 'hsl(217, 12%, 63%)'
    }
    else if(ratingTwoVal == 'active'){
        ratingOne.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingOne.style.color = 'hsl(217, 12%, 63%)'
        ratingTwo.style.backgroundColor = 'hsl(25, 97%, 53%)'
        ratingTwo.style.color = '#fff'
        ratingThree.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingThree.style.color = 'hsl(217, 12%, 63%)'
        ratingFour.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingFour.style.color = 'hsl(217, 12%, 63%)'
        ratingFive.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingFive.style.color = 'hsl(217, 12%, 63%)'
    }
    else if(ratingThreeVal == 'active'){
        ratingOne.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingOne.style.color = 'hsl(217, 12%, 63%)'
        ratingTwo.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingTwo.style.color = 'hsl(217, 12%, 63%)'
        ratingThree.style.backgroundColor = 'hsl(25, 97%, 53%)'
        ratingThree.style.color = '#fff'
        ratingFour.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingFour.style.color = 'hsl(217, 12%, 63%)'
        ratingFive.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingFive.style.color = 'hsl(217, 12%, 63%)'
    }
    else if(ratingFourVal == 'active'){
        ratingOne.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingOne.style.color = 'hsl(217, 12%, 63%)'
        ratingTwo.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingTwo.style.color = 'hsl(217, 12%, 63%)'
        ratingThree.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingThree.style.color = 'hsl(217, 12%, 63%)'
        ratingFour.style.backgroundColor = 'hsl(25, 97%, 53%)'
        ratingFour.style.color = '#fff'
        ratingFive.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingFive.style.color = 'hsl(217, 12%, 63%)'
    }
    else if(ratingFiveVal == 'active'){
        ratingOne.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingOne.style.color = 'hsl(217, 12%, 63%)'
        ratingTwo.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingTwo.style.color = 'hsl(217, 12%, 63%)'
        ratingThree.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingThree.style.color = 'hsl(217, 12%, 63%)'
        ratingFour.style.backgroundColor = 'hsl(213, 19%, 18%)'
        ratingFour.style.color = 'hsl(217, 12%, 63%)'
        ratingFive.style.backgroundColor = 'hsl(25, 97%, 53%)'
        ratingFive.style.color = '#fff'
    }
}

sumbitBtn.addEventListener('click', () => {
    if(ratingOneVal == 'active' || ratingTwoVal == 'active' || ratingThreeVal == 'active' || ratingFourVal == 'active' || ratingFiveVal == 'active'){
        sectionOne.style.display = 'none';
        sectionTwo.style.display = 'flex';
        if(ratingOneVal == 'active') {
            changeText.textContent = 'You selected 1 out of 5';
        }
        else if(ratingTwoVal == 'active') {
            changeText.textContent = 'You selected 2 out of 5';
        }
        else if(ratingThreeVal == 'active') {
            changeText.textContent = 'You selected 3 out of 5';
        }
        else if(ratingFourVal == 'active') {
            changeText.textContent = 'You selected 4 out of 5';
        }
        else if(ratingFiveVal == 'active') {
            changeText.textContent = 'You selected 5 out of 5';
        }
    }
    else {

    }
})