const fs = require('fs');

// 유저 생성 메서드
module.exports = (req, res) => {
  const userName = req.body.userName;
  const data = [
    {
      id: 0,
      userName: userName,
      status: {},
      taskCount: 0,
    },
  ];

  fs.readdir('./src/api/users', (err, files) => {
    if (err) throw err;
    else if (!files.includes(userName)) {
      fs.mkdir(`./src/api/users/${userName}`, (err) => {
        if (err) throw err;
      });
      fs.appendFile(`./src/api/users/${userName}/GET.json`, JSON.stringify(data), function (err) {
        if (err) throw err;
      });
    } else {
      return res.status(409).write(`${userName}님은 이미 존재하는 유저입니다.`);
    }
  });

  return res.status(201).send(`${userName} 유저 생성 성공!`);
};
