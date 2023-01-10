const fs = require('fs');

// TODO Status 추가 메서드
module.exports = async (req, res) => {
  const { loginedUser, statusName } = req.body;
  let userData = await require(`./users/${loginedUser}/GET.json`);
  const { status } = userData;

  if (statusName) {
    let checkDup = false;

    Object.keys(status).forEach((key) => {
      if (key === statusName) {
        checkDup = true;
        return false;
      }
    });
    if (checkDup) return res.status(201).write(`${statusName}은 이미 존재합니다.`);

    const newStatus = {};
    newStatus[`${statusName}`] = [];

    const merge = Object.assign(status, newStatus);
    userData = { ...userData, status: merge };

    fs.writeFile(`./src/api/users/${loginedUser}/GET.json`, JSON.stringify(userData), function (err) {
      if (err) throw err;
    });
  }

  return res.status(201).send('업데이트 완료');
};
