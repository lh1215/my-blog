import { Get, JsonController, QueryParam } from "routing-controllers";
import { Inject } from "typedi";
import UserService from "../service/UserService";

@JsonController('/user')
export default class UserController {

  @Inject()
  private customerRadar: UserService;

  @Get('/get-user-list')
  async getIntentPredictList(
    @QueryParam('user-id') userId: number,
  ): Promise<any> {
    return this.customerRadar.getIntentPredictList(userId);
  }
}
