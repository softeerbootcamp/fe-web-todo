const input_data={
    'title': '',
    'contents': ''
}

const delete_data={
    Status : null,
    Title : null,
    Contents: null
}

const todos_status=['todo','doing','done'];

const todos = [
    {
        Status : 'todo',
        Title : 'Git hub 공부하기',
        Contents: 'add , commit , push'
    },
    {
        Status : 'todo',
        Title : 'Git hub 블로그에 포스팅할 것',
        Contents: '* Git hub 공부내용 * 모던 자바스크립트 1장 공부 내용'
    },
    {
        Status : 'doing',
        Title : '모던 자바스크립트 예제 실습',
        Contents: 'input 태그'
    }
]

class Notice {
    constructor() {
        this.notices = [];
    }
    show(){
        this.notices.map(notice => {
            console.log(notice);
        })
    }
}

const notice = new Notice();

export {input_data,delete_data,todos_status,todos,notice}