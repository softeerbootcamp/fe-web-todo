
export default function WorkBox(title = "", content = "", time) {
    this.title = title;
    this.content = content;
    this.input_value = ""
    this.textarea_value = ""
    this.author = "web"
    this.time = time;
    this.isRegistable = false;
    this.node;
}
WorkBox.prototype.createNode = function () {
    this.node = document.createElement('li')
    this.node.classList.add("work_box")
    this.node.classList.add("adding")
    this.node.innerHTML =
        `<div class="work_box_row ">
            <div class="work_box_contents ">
                <input type="text" class="work_box_title_input " value="${this.input_value}" placeholder="제목을 입력하세요">
                <textarea rows="1" class="work_box_main_input " value="${this.textarea_value}" placeholder="내용을 입력하세요"
                    onkeydown="resize(this); " onkeyup="resize(this); "></textarea>
                <div class="work_box_title ">${this.title}</div>
                <div class="work_box_main ">${this.content}</div>
                <div class="work_box_author ">author by ${this.author}</div>
            </div>
            <div class="work_box_icon">
                <img src="./icons/box_close_icon.svg" alt="">
            </div>
        </div>
        <div class="work_box_buttons ">
            <button class="add_cancel_button">취소</button>
            <button class="add_register_button">등록</button>
        </div>
            `;
    this.cancel_add();
    this.register_add();
    // this.input_check();
    this.edit();
}
WorkBox.prototype.register_add = function () {
    const add_register_btn = this.node.querySelector(".add_register_button");
    add_register_btn.addEventListener('click', () => {
        // this.input_value = this.node.querySelector(".work_box_title_input").value;
        // this.textarea_value = this.node.querySelector(".work_box_main_input").value;

        this.title = this.input_value;
        this.content = this.textarea_value;//<br>바꿔주기


        const work_box_title = this.node.querySelector(".work_box_title");
        const work_box_main = this.node.querySelector(".work_box_main");

        work_box_title.innerHTML = this.title;
        work_box_main.innerHTML = this.content;

        this.node.classList.remove("adding");
    })
}
WorkBox.prototype.input_check = function () {
    this.node.addEventListener('keydown', () => {
        this.input_value = this.node.querySelector(".work_box_title_input").value;
        this.textarea_value = this.node.querySelector(".work_box_main_input").value;

        if (this.input_value.length > 0 && this.textarea_value.length > 0)
            this.isRegistable = true;
        else {
            this.isRegistable = false;
        }
        if(this.isRegistable) 
        this.node.getElementsByClassName('add_register_button')[0].classList.add("ready")
        
        else{
            this.node.getElementsByClassName("add_register_button")[0].classList.remove("ready")
        }
    }
    );
    this.node.addEventListener('keyup', () => {
        this.input_value = this.node.querySelector(".work_box_title_input").value;
        this.textarea_value = this.node.querySelector(".work_box_main_input").value;

        if (this.input_value.length > 0 && this.textarea_value.length > 0)
            this.isRegistable = true;
        else {
            this.isRegistable = false;
        }
        // const add_register_btn = this.node.querySelector(".add_register_button");
        if(this.isRegistable) 
        this.node.getElementsByClassName('add_register_button')[0].classList.add("ready")
        // this.node.querySelector(".add_register_button").classList.add("ready")
        else{
            this.node.getElementsByClassName("add_register_button")[0].classList.remove("ready")
        }
        console.log(this.node.getElementsByClassName('add_register_button')[0].classList)
    }
    )

    // const textarea = this.node.querySelector(".work_box_main_input");
    // if(this.input_value.length > 0 && this.textarea_value.length>0)
    //     this.isRegistable = true;
    // else{
    //     this.isRegistable = false;
    // }
}
WorkBox.prototype.cancel_add = function () {
    const add_cancel_btn = this.node.querySelector(".add_cancel_button");
    add_cancel_btn.addEventListener('click', () => {
        this.node.remove();
    })
}
WorkBox.prototype.edit = function () {
    this.node.addEventListener('dblclick', () => {
        if (!this.node.classList.contains("adding")){
            // this.node.querySelector("add_register_button").innerHTML("수정")
            // console.log(this.node.querySelector("add_register_button").textContent)
            this.node.classList.add("adding")
            // this.node
        }
            // console.log("더블클릭")
    })
}
WorkBox.prototype.remove = function () {
    console.log(this.name + "님, 오늘은 " + this.healthTime + "에 운동을 하셨네요");
}
WorkBox.prototype.create_log = function () {
    console.log(this.name + "님, 오늘은 " + this.healthTime + "에 운동을 하셨네요");
}

//   const ho = new WorkBox("crong", "12:12");
//   ho.showHealth();

