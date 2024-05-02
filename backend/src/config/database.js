import { Sequelize } from "sequelize";
 
const db = new Sequelize('mern_db', 'ringo', '12345', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;