import * as types from '../interface/types';
import User from '../model/user.model';

export default class UserDao {

    // 根据名称密码查询
    async getUserByNameAndPassWord(user: types.user.User): Promise<types.common.Response> {
        try {
            const result = await new Promise((resolve, reject) => {
                User.find({$and: [{name: user.name}, {password: user.password}]}, (err, user) => {
                    if (!err) {
                        resolve(user);
                    } else {
                        reject(err);
                    }
                }).limit(1);
            });
            return result;
        } catch (e) {
            throw e;
        }
    }
}
