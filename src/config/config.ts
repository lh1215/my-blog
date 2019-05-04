import * as path from 'path';
const rootPath = path.resolve(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

// 数据库配置
const config: any = {
    development: {
        root: rootPath,
        app: {
            name: 'myBlog'
        },
        port: 3000,
        user: '',
        psw: '',
        host: '127.0.0.1',
        dbs: 'blog',
        dbport: 27017
    },

    production: {
        root: rootPath,
        app: {
            name: 'myBlog'
        },
        port: 3000,
        db: 'mongodb://localhost/myBlog-production'
    }
};

export default config[env];
