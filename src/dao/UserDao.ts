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
    async login(userName: string, password: string): Promise<any> {
        try {
            const userInfo: any = await db('SELECT * FROM user WHERE userName = ? and password = ?', {userName, password});
            return {userId: userInfo.userId, sessionId: guid()};
        } catch (e) {
            throw e
        }
    }

    async getLoginInfo(sessionId: string): Promise<any> {
        try {
            const result = await db('SELECT * FROM user WHERE sessionId = ?', {sessionId});
            return result;
        } catch (e) {
            throw e;
        }
    }

    async updateUserInfo(sessionId: string, invalidTime: number, userName: string, password: string): Promise<any> {
        try {
            const result = await db('UPDATE user SET session_id = ?, invalid_time = ? WHERE userName = ? and password = ?', {sessionId, invalidTime, userName, password});
            return result;
        } catch (e) {
            throw e;
        }
    }
}
