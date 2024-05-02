import db from "../config/database.js";
 
import { DataTypes, Sequelize } from 'sequelize';

 
const Product = db.define('products',{
    title:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName: true
});
 
export default Product;