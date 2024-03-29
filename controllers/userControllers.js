const userSchema = require("../model/dbScheema");

const getAllUser = async (req, res) => {
  const allUser = await userSchema.find();
  res.status(200).send(allUser);
};
// const getOneUser = async (req, res) => {
//   const OneUser = await userSchema.findOne({ name: req.params.name });
//   if (OneUser) {
//     res.status(200).send(OneUser);
//   } else {
//     res.status(404).send("name is not found");
//   }
// };
// const creatUser = async (req, res) => {
//   const { name, email, phoneNumber } = req.body;
//   const newUser = new userSchema({
//     name,
//     email,
//     mobile: phoneNumber,
//   });
//   await newUser.save();
//   res.status(200).send("create users from mongodb" + newUser);
// };
// const updateUser = async (req, res) => {
//   const OneUser = await userSchema.findOne({ name: req.params.name });
//   if (OneUser) {
//     const { name, email, mobile } = req.body;
//     OneUser.name = name;
//     OneUser.mobile = mobile;
//     OneUser.email = email;
//     await OneUser.save();
//     res.status(200).send(OneUser);
//   } else {
//     res.status(200).send("Not update because name is not available ");
//   }
// };
// const deleteUser = (req, res) => {
//   res.status(200).send("delete users from mongodb");
// };

module.exports = { getAllUser };
// , getOneUser, updateUser, deleteUser, creatUser