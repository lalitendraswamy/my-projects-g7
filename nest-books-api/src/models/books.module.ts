import { DataTypes } from "sequelize";
import { sequelize } from "./db";

export const Book= sequelize.define('Books',{
    id:{
        type:DataTypes.STRING,
        primaryKey:true
    },
    title: DataTypes.STRING,
    isbn: DataTypes.INTEGER,
    author:DataTypes.STRING,
    author_id: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    photo:DataTypes.STRING,
});

Book.sync();