import {Inject, Service} from "typedi";
import UserDao from '../dao/UserDao';

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

}
