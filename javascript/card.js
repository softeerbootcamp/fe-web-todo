//for card delete

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
    let BeforeTitle=TargetCard.getElementsByClassName('CardTitle')[0].innerText;
    let BeforeBody=TargetCard.getElementsByClassName('CardBody')[0].innerText.replace(/\* /g,"");

    TargetCard.className = 'NewCard';
    TargetCard.innerHTML=`<div class="CardTitle"><input type="text" value="${BeforeTitle}" placeholder="${BeforeTitle}" class="TitleInput"></input></div>
                        <div class="CardBody"><textarea type="text" maxlength="500" class="CardInput" placeholder="${BeforeBody}" onkeydown="CardHeightAdjust(this)" onkeyup="CardHeightAdjust(this)">${BeforeBody}</textarea></div>
                        <div class="CardButton"><button class="CardCancel" onclick="CardModifyingCancel(this)">취소</button><button class="CardRegister" onclick="CardModifyingYes(this)">등록</button></div>`;
    CardHeightAdjust(TargetCard.getElementsByClassName('CardInput')[0]);
    TargetCard.draggable = false;
}

function CardModifyingCancel(obj){
    let BeforeTitle=obj.parentElement.parentElement.getElementsByClassName('TitleInput')[0].placeholder;
    let BeforeBody=obj.parentElement.parentElement.getElementsByClassName('CardInput')[0].placeholder.replace(/\r\n|\n|\r/g,"<br>* ");
    const Card=obj.parentElement.parentElement;
    if((/<br>/).test(BeforeBody)){
        BeforeBody = '* ' + BeforeBody;
    }
    obj.parentElement.parentElement.className='ColumnCards';
    obj.parentElement.parentElement.draggable=true;
    obj.parentElement.parentElement.style.height='';
    obj.parentElement.parentElement.innerHTML=`<div class="CardTitle">${BeforeTitle}<i class="fa-solid fa-xmark" onclick="ModalAlert(this)"></i></div>
                                                <div class="CardBody">${BeforeBody}</div>
                                                <div class="CardAuthor">author by web</div>`;
    console.log(Card);
    Card.addEventListener("dblclick",CardModifying());
}

function CardModifyingYes(obj){
    let NewTitle=obj.parentElement.parentElement.getElementsByClassName('TitleInput')[0].value;
    let NewBody=obj.parentElement.parentElement.getElementsByClassName('CardInput')[0].value.trim().replace(/\n\n/g,"").replace(/\r\n|\n|\r/g,"<br>* ");
    const Card=obj.parentElement.parentElement;
    if((/<br>/).test(NewBody)){
        NewBody = '* ' + NewBody;
    }
    obj.parentElement.parentElement.className='ColumnCards';
    obj.parentElement.parentElement.draggable=true;
    obj.parentElement.parentElement.style.height='';
    obj.parentElement.parentElement.innerHTML=`<div class="CardTitle">${NewTitle}<i class="fa-solid fa-xmark" onclick="ModalAlert(this)"></i></div>
                                                <div class="CardBody">${NewBody}</div>
                                                <div class="CardAuthor">author by web</div>`;
    console.log(Card);
    Card.addEventListener("dblclick",CardModifying());
}

function CardMaking(obj){
    let NewTitle=obj.parentElement.parentElement.getElementsByClassName('TitleInput')[0].value;
    let NewBody=obj.parentElement.parentElement.getElementsByClassName('CardInput')[0].value.trim().replace(/\n\n/g,"").replace(/\r\n|\n|\r/g,"<br>* ");
    if((/<br>/).test(NewBody)){
        NewBody = '* ' + NewBody;
    }
    let NewCardForm = document.createElement("div");
    NewCardForm.classList.toggle("ColumnCards");
    NewCardForm.innerHTML=`<div class="CardTitle">${NewTitle}<i class="fa-solid fa-xmark" onclick="ModalAlert(this)"></i></div>
                            <div class="CardBody">${NewBody}</div>
                            <div class="CardAuthor">author by web</div>`;
    obj.parentElement.parentElement.parentElement.getElementsByClassName('CardSection')[0].appendChild(NewCardForm);

    obj.parentElement.parentElement.getElementsByClassName('TitleInput')[0].value='';
    obj.parentElement.parentElement.getElementsByClassName('CardInput')[0].value='';
    obj.parentElement.parentElement.parentElement.getElementsByClassName('NewCard')[0].style.display='none';
}

function CardDelete(TargetCard){
    TargetCard.style.display = 'none';
}