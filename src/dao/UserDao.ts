import { db } from '../util/db';
import { guid } from '../util/guid';

export default class UserDao {

    // 根据用户 id 查询用户
    async getUserInfoById(userId: string): Promise<any> {
        try {
            const userInfo = await db('SELECT * FROM user WHERE userId = ?', userId);
            return userInfo;
        } catch (e) {
            throw e
        }
    }

    // 根据账号和密码查询用户
    async getUserInfo(userName: string, password: string): Promise<any> {
        try {
            const userInfo: any = await db('SELECT * FROM user WHERE userName = ? and password = ?', {userName, password});
            return {userId: userInfo.userId, sessionId: guid()};
        } catch (e) {
            throw e
        }
    }
}
