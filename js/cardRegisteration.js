let registerInput = document.getElementById("register-form");
let registerButton = document.getElementById("register-accept-button");
let registerForm = document.getElementsByClassName("card-register-form")[0];

let korpattern = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

function contentChange() {
    let formHeight = parseInt(registerForm.style.height)
    let kor = 1/15, oth = 1/22, diff = 0;

    if(registerInput.value.length == 0){
        registerButton.disabled = true;
    }
    else{
        registerButton.disabled = false;
    }

    [...registerInput.value].forEach(char => {
        if(korpattern.test(char)){
            diff += kor;
        }
        else if(char == "\n"){
            diff += 1;
            diff = parseInt(diff);
        }
        else{
            diff += oth;
        }
    });
    diff = parseInt(diff) * 3;

    if(Number.isNaN(formHeight) || formHeight + diff < 8){
        registerForm.style.height = "14.5vh";
        registerInput.style.height = "8vh";
    }
    else{
        registerForm.style.height = String(14.5 + diff) + "vh";
        registerInput.style.height = String(8 + diff) + "vh";
    }
}

registerInput.addEventListener("input", () => {
    console.log("hello")
    contentChange();
})