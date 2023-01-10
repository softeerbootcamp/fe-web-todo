const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

process.stdout.write("명령하세요 : ")
rl.on("line", function(line) {
    let input = line.split('$');

    if(input[0] === 'close' && input.length ==1)
        rl.close()
    if(input[0] === 'show'&& input.length ==2)
        require('./show').show(input);
    else if(input[0] === 'add'&& input.length ==3)
        require('./add').add(input);
    else if(input[0] === 'delete'&& input.length ==2)
        require('./delete').delete(input);
    else if(input[0] === 'update'&& input.length ==3)
        require('./update').update(input);    
    else if(line)
        console.log("잘못된 입력입니다.");
    process.stdout.write("\n명령하세요 : ")

}).on("close", function() {
    process.exit();
});