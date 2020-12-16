let subBtn = document.getElementById('subBtn');

subBtn.addEventListener('click', function(){

    // text Area
    let txtArea = document.getElementById('addTxt');
    let text = txtArea.value;
    txtArea.value = "";

    // Selecting the parent Node
    let container = document.getElementsByClassName('container')[0];

    // Creating a new element
    let div = document.createElement('div');

    if( text.length == 0)
    {
        div.className = "alert alert-danger";
        div.innerHTML = 'Enter a Non-Empty String';
    }
    else
    {
        vowel_count = vowelCounter(text);

        if( vowel_count != 0)
        {
            div.className = "alert alert-success";
            div.innerHTML = `Text : ${text} <br> The Input String has ${vowel_count} vowels`;
        }
        else
        {
            div.className = "alert alert-primary";
            div.innerHTML = `Text : ${text} <br> The Input String has no vowels`;
        }
    }

    container.appendChild(div);
});

function vowelCounter(text) {

  let vowels = 'aeiou';

  text = text.toLowerCase();

  let count = 0;

  for (let index = 0; index < text.length; index++) {
      
    let ch = text[index];

    if( ch == ' ')
    {
        continue;
    }

    if( vowels.indexOf(ch) > -1 )
    {
        count++;
    }
  }

  return count;
};