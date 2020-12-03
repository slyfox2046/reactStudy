const express = require('express');
const isEmpty = require('lodash/isEmpty');
const validator = require('validator');
const router = express.Router();

const validatorInput = (data) => {
  let errors = {};
  if (validator.isEmpty(data.username)) {
    errors.username = '请填写用户名';
  }
  if (!validator.isEmail(data.email)) {
    errors.email = '请填写邮箱';
  }
  if (validator.isEmpty(data.password)) {
    errors.username = '请填写密码';
  }
  if (validator.isEmpty(data.passwordConfirmation)) {
    errors.username = '请确认密码';
  }
  if (!validator.equals(data.password, data.passwordConfirmation)) {
    errors.username = '两次密码不同';
  }
  return {
    errors,
    isValid: isEmpty(error),
  };
};

// 这里的路径是route 下的路径
router.get('/', (req, res) => {
  console.log(req.body)

  const { errors, isValid } = validatorInput(req.body);
  
});
module.exports = router;
