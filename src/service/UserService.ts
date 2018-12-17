import {Inject, Service} from "typedi";
import UserDao from '../dao/UserDao';
import {Context} from "koa";
import {guid} from "../util/guid";

@Service()
export default class UserService {

  @Inject()
  private userDao: UserDao;

  async getUserInfoById(userId: string): Promise<any> {
    try {
      const predictListResponse: any = await this.userDao.getUserInfoById(userId);
      if (predictListResponse.length > 0) {
        return predictListResponse[0];
      } else {
        return predictListResponse;
      }
    } catch (e) {
      throw e;
    }
  }

  async login(body: any, ctx: Context): Promise<any> {
    try {
      const userInfo = await this.userDao.login(body.userName, body.password);
      if (userInfo !== undefined) {
        const sessionId = guid();
        const new_date = new Date().getTime();
        const res = await this.userDao.updateUserInfo(sessionId, new_date, body.userName, body.password);
        if (res) {
          ctx.cookies.set('blog_user_token', userInfo.sessionId);
        }
      }
      return userInfo;
    } catch (e) {
      throw e;
    }
  }

  async getLoginInfo(ctx: Context): Promise<any> {
    try {
      const sessionId = ctx.cookies.get('blog_user_token');
      let response: any;
      if (sessionId !== undefined) {
          response = await this.userDao.getLoginInfo(sessionId);
      }
      return response;
    } catch (e) {
        throw e;
    }
  }

}
