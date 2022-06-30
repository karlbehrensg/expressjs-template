const yup = require("yup");

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.email(),
});

module.exports = schema;
