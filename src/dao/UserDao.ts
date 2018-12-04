import { db } from '../util/db';

export default class UserDao {

    // 根据用户 id 查询用户
    async getUserInfoById(userId: string): Promise<any> {
        try {
            const userInfo = await db('SELECT * FROM user WHERE id = ?', userId);
            return userInfo;
        } catch (e) {
            throw e
        }
    }

    // 根据账号和密码查询用户
    async getUserInfo(userName: string, password: string): Promise<any> {
        try {
            const userInfo = await db('SELECT * FROM user WHERE userName = ? and password = ?', {userName, password});
            return userInfo;
        } catch (e) {
            throw e
        }
    }
}
