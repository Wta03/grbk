// 该文件负责连接数据库
const { Sequelize } = require("sequelize");

// 创建数据库连接
const sequelize = new Sequelize('grbk','root','123456', {
    host: 'localhost',
    dialect:'mysql' ,
    logging: false
});

// 向外暴露这个连接实例
module.exports = sequelize;