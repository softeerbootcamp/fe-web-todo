//for card register, edit, and delete
let BeforeTitle;
let BeforeBody;

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
    BeforeTitle=TargetCard.getElementsByClassName('CardTitle')[0].innerText;
    BeforeBody=TargetCard.getElementsByClassName('CardBody')[0].innerText.replace(/\* /g,"");

    TargetCard.className = 'NewCard';
    TargetCard.innerHTML=`<div class="CardTitle"><input type="text" value="${BeforeTitle}" class="TitleInput"></input></div>
                        <div class="CardBody"><textarea type="text" maxlength="500" class="CardInput" onkeydown="CardHeightAdjust(this)" onkeyup="CardHeightAdjust(this)">${BeforeBody}</textarea></div>
                        <div class="CardButton"><button class="CardCancel" onclick="CardModifyingCancel(this)">취소</button><button class="CardRegister" onclick="CardModifyingYes(this)">등록</button></div>`;
    CardHeightAdjust(TargetCard.getElementsByClassName('CardInput')[0]);
    TargetCard.draggable = false;
}

function CardModifyingCancel(obj){
    BeforeBody=BeforeBody.replace(/\r\n|\n|\r/g,"<br>* ");
    if((/<br>/).test(BeforeBody)){
        BeforeBody = '* ' + BeforeBody;
    }
    obj.parentElement.parentElement.className='ColumnCards';
    obj.parentElement.parentElement.draggable=true;
    obj.parentElement.parentElement.style.height=(parseInt(obj.parentElement.parentElement.style.height) - 60) + 'px';
    obj.parentElement.parentElement.innerHTML=`<div class="CardTitle">${BeforeTitle}<i class="fa-solid fa-xmark" onclick="ModalAlert(this)"></i></div>
                                                <div class="CardBody">${BeforeBody}</div>
                                                <div class="CardAuthor">author by web</div>`;
    obj.parentElement.parentElement.ondblclick=CardModifying(this);
}

function CardModifyingYes(obj){
    let NewTitle=obj.parentElement.parentElement.getElementsByClassName('TitleInput')[0].value;
    let NewBody=obj.parentElement.parentElement.getElementsByClassName('CardInput')[0].value.replace(/\n\n/g,"").replace(/\r\n|\n|\r/g,"<br>* ");
    if((/<br>/).test(NewBody)){
        NewBody = '* ' + NewBody;
    }
    obj.parentElement.parentElement.className='ColumnCards';
    obj.parentElement.parentElement.draggable=true;
    obj.parentElement.parentElement.innerHTML=`<div class="CardTitle">${NewTitle}<i class="fa-solid fa-xmark" onclick="ModalAlert(this)"></i></div>
                                                <div class="CardBody">${NewBody}</div>
                                                <div class="CardAuthor">author by web</div>`;
    obj.parentElement.parentElement.ondblclick=CardModifying(this);
}

function CardDelete(){
    console.log("Not Yet");
}