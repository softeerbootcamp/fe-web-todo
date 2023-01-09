//for card register, edit, and delete
function RegisterFormShow(){
    const CardForm = document.getElementsByClassName('NewCard')[0];
    
    if(CardForm.style.display != 'block'){
        CardForm.style.display = 'block';
    }
    else{
        CardForm.style.display = 'none';
    }
}

function CardHeightAdjust(InputArea){
    const CardForm = document.getElementsByClassName('NewCard')[0];
    const CardButton = document.getElementsByClassName('CardRegister')[0];

    if(InputArea.value.length > 0){
        CardButton.disabled = false;
    }
    else{
        CardButton.disabled = true;
    }

    InputArea.style.height = '1px';
    InputArea.style.height = (24 + InputArea.scrollHeight) + 'px';
    CardForm.style.height = (87 + InputArea.scrollHeight) + 'px';
}