import {Inject, Service} from "typedi";
import UserDao from '../dao/UserDao';
import {Context} from "koa";

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

  async getUserInfo(body: any, ctx: Context): Promise<any> {
    try {
      const userInfo = await this.userDao.getUserInfo(body.userName, body.password);
      ctx.cookies.set('blog_user_token', userInfo.sessionId);
      return userInfo;
    } catch (e) {
      throw e;
    }
  }

}
