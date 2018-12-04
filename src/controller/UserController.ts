import { Get, JsonController, QueryParam } from "routing-controllers";
import { Inject } from "typedi";
import UserService from "../service/UserService";
import { HttpJson } from "../util/httpJson";

@JsonController('/user')
export default class UserController {

  @Inject()
  private userService: UserService;

  @Get('/get-user-info')
  async getIntentPredictList(
    @QueryParam('userId') userId: string
  ): Promise<HttpJson> {
    try {
      const result = this.userService.getUserInfoById(userId);
      return new HttpJson(result);
    } catch (e) {
      throw e
    }
  }
}
