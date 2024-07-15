
function pin(){
    const pin = Math.round(Math.random()*10000);
   const stringPin = pin + '';
   if(stringPin.length == 4){
   return pin;
   }
   else{
   return pin()
   }
}

function generatePin(){
   const getPin = pin();
  document.getElementById('generate-input').value = getPin;
}

document.getElementById('type-numbers').addEventListener('click', function(event){
    const numbers = event.target.innerText;
    const input = document.getElementById('type-input');
    if(isNaN(numbers)){
        if(numbers == 'C'){
            input.value = ''
        }
    }
    else{
        input.value += numbers;
    }
});

function submit(){
    const generatePin = document.getElementById('generate-input').value;
    const typePin = document.getElementById('type-input').value;

    const notifyError = document.getElementById('notify-error');
    const notifySuccess = document.getElementById('notify-success');
    if(generatePin == typePin){
        notifyError.style.display = 'none';
        notifySuccess.style.display = 'block';
    }
    else{
        notifyError.style.display = 'block';
        notifySuccess.style.display = 'none';
    }
}