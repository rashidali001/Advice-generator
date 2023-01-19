let img = document.querySelector('#divider');
let advice_id = document.querySelector('#advice_id');
let advice = document.querySelector('#advice');
let button = document.querySelector('#button');

if (window.innerWidth < 400)
{
    img.src = './images/pattern-divider-mobile.svg';
}
else{
    img.src = './images/pattern-divider-desktop.svg';
}

window.addEventListener('resize', function(){
    if (window.innerWidth < 400)
{
    img.src = './images/pattern-divider-mobile.svg';
}
else{
    img.src = './images/pattern-divider-desktop.svg';
}
});

fetch('https://api.adviceslip.com/advice')
.then (res => res.json())
.then (slip_obj => {
    advice_id.innerHTML = slip_obj['slip']['id'];    
    advice.innerHTML = slip_obj['slip']['advice'];
});


button.addEventListener('click', function(){
    fetch('https://api.adviceslip.com/advice')
    .then (res => res.json())
    .then (slip_obj => {
        advice_id.innerHTML = slip_obj['slip']['id'];    
        advice.innerHTML = slip_obj['slip']['advice'];
    });
}, true)




