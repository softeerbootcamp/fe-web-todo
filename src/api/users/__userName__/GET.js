module.exports = (req, res) => {
  res.status(404).send(console.log('해당 유저가 존재하지 않습니다.'));
};
