let previousBtn = document.getElementById('previousBtn');
let nextBtn = document.getElementById('nextBtn');
let content = document.getElementById('content');
let bullets = [...document.querySelectorAll('.bullet')];
let texts = [...document.querySelectorAll('.step-text')];

const MAX_STEP = 5;
let current_step = 1;
let arr = ["Start","One", "Two", "Three", "Complete"];

// NEXT BUTTON
nextBtn.addEventListener('click', function () {
   const curr_bullet = bullets[current_step - 1];
   texts[current_step - 1].style.color = 'green';
   curr_bullet.classList.add('completed');
   curr_bullet.innerHTML = '&#10003;';
   current_step++;
   previousBtn.disabled = false;

   if( current_step <= MAX_STEP)
   {
    texts[current_step - 1].style.color = 'rgb(43, 130, 230)';
    content.innerText = `Step ${arr[current_step - 1]}`;
   }

   if( current_step > MAX_STEP )
   {
       nextBtn.disabled = true;
       content.innerText = `TASK COMPLETED`;
   }
});

// PREVIOUS BUTTON
previousBtn.addEventListener('click', function() {
    const prev_bullet = bullets[current_step - 2];
    if( current_step > MAX_STEP )
    {
        texts[current_step - 2].style.color = 'rgb(43, 130, 230)';
    }
    else
    {
        texts[current_step - 2].style.color = 'rgb(43, 130, 230)';
        texts[current_step - 1].style.color = 'black';
    }
    prev_bullet.classList.remove('completed');
    current_step--;
    nextBtn.disabled = false;
    if( current_step == 1)
    {
        previousBtn.disabled = true;
        content.innerText = `${arr[current_step - 1]}`;
    }
    else
    {
        content.innerText = `Step ${arr[current_step - 1]}`;
    }
});