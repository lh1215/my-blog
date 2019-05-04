/**
 * 配置mongoose连接mongodb
 */
import * as mongoose from 'mongoose';
/**
 * 引入配置
 */
import coreConfig from '../config/config';

const uris = `mongodb://${coreConfig.user}:${coreConfig.psw}@${coreConfig.host}:${coreConfig.dbport}/${coreConfig.dbs}`;
const options: any = {};

options['useNewUrlParser'] = true;
options['useCreateIndex'] = true;
options['useFindAndModify'] = false;


mongoose.connect(uris, options);
const db = mongoose.connection;
db.on('error', function () {
    throw new Error('mongodb连接失败 ' + coreConfig.dbs);
});
export default (app: any) => {
    db.once('open', function () {
        console.log('数据库启动了');
        app.listen(coreConfig.port, () => console.log('mongodb连接成功' + coreConfig.port));
    });
};
