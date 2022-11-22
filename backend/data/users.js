import bcrypt from "bcryptjs";
const users = [
  {
    name: "Nsanzimana Gilbert",
    email: "admin@example.com",
    isAdmin: true,
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John Doe",
    email: "jone@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
