import * as mysql from 'mysql';

/**
 * 封装一个数据库连接的方法
 * @param {string} sql SQL语句
 * @param arg SQL语句插入语句的数据
 * @param callback SQL语句的回调
 */
export function db(sql: string, arg: any, callback?: any) {
    // 1.创建连接
    const config = mysql.createConnection({
        host: '127.0.0.1', // 数据库地址
        user: 'root', // 数据库用户
        password: '123456', // 数据库密码
        port: 3306, // 端口号
        database: 'blog' // 使用数据库名字
    });

    return new Promise((resolve, reject) => {
        try {

            // 2.开始连接数据库
            config.connect();
            // 3.封装对数据库的增删改查操作
            config.query(sql, arg, (err: any, data: any) => {
                resolve(data);
            });
            // 4.关闭数据库
            config.end();

        } catch (err) {
            reject(err)
        }
    })
}
