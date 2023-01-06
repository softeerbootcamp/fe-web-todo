const todos =  [ {
	'name' : 'GitHub 등록하기', 
	'tags' : ['programming', 'javascript'],
	'status' : 'todo',
	'id' : 1
},
{
	'name' : ' 그림 그리기', 
	'tags' : ['picture', 'favorite'],
	'status' : 'doing',
	'id' : 2
},
{
	'name' : ' ios 공부하기', 
	'tags' : ['ios', 'favorite'],
	'status' : 'todo',
	'id' : 3
},
{
	'name' : ' 컴퓨터 수리하기', 
	'tags' : ['angry', 'computer'],
	'status' : 'done',
	'id' : 4
},
{
	'name' : ' 만화 보기', 
	'tags' : ['cartoon'],
	'status' : 'todo',
	'id' : 5
}
]

const todo = todos.filter( tmp => tmp.status === 'todo').length;
document.getElementById("total_number_todo").innerHTML = "<br>" + todo;

const doing = todos.filter( tmp => tmp.status === 'doing').length;
document.getElementById("total_number_doing").innerHTML = "<br>" + doing;

const done = todos.filter( tmp => tmp.status === 'done').length;
document.getElementById("total_number_done").innerHTML = "<br>" + done;

