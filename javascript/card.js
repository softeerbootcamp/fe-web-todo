//for card register, edit, and delete
function RegisterFormShow(obj){
    const CardForm = obj.parentElement.parentElement.parentElement.getElementsByClassName('NewCard')[0];
    const CardSection = obj.parentElement.parentElement.parentElement.getElementsByClassName('CardSection')[0];
    
    if(CardForm.style.display != 'block'){
        CardForm.style.display = 'block';
        CardForm.getElementsByClassName('TitleInput')[0].focus();
    }
    else{
        CardForm.style.display = 'none';
    }
}

function CardHeightAdjust(InputArea){
    const CardForm = InputArea.parentElement.parentElement;
    const CardButton = InputArea.parentElement.parentElement.getElementsByClassName('CardRegister')[0];

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

function CardModifying(TargetCard){
    const BeforeTitle=TargetCard.getElementsByClassName('CardTitle')[0].innerText;
    const BeforeBody=TargetCard.getElementsByClassName('CardBody')[0].innerText;

    TargetCard.className = 'NewCard';
    TargetCard.innerHTML=`<div class="CardTitle"><input type="text" value="${BeforeTitle}" class="TitleInput"></input></div>
                        <div class="CardBody"><textarea type="text" maxlength="500" id="CardInput" onkeydown="CardHeightAdjust(this)" onkeyup="CardHeightAdjust(this)">${BeforeBody}</textarea></div>
                        <div class="CardButton"><button class="CardCancel" onclick="RegisterFormShow(this)">취소</button><button class="CardRegister" disabled="false">등록</button></div>`;
    TargetCard.draggable = 'false';
}

function CardDelete(){
    console.log("Not Yet");
}