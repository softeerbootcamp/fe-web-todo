const todos =  [ {
	'name' : '자바스크립트 공부하기', 
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

const [TODO, DOING, DONE] = ['todo', 'doing', 'done']

exports.todos = todos;
exports.TODO = TODO;
exports.DOING = DOING;
exports.DONE = DONE;


