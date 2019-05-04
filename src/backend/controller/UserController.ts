import {Body, JsonController, Post} from "routing-controllers";
import { Inject } from "typedi";
import * as types from '../interface/types';
import UserService from "../service/UserService";
import { HttpJson } from "../../util/HttpJson";
import { ControlError } from "../../util/PageError";

@JsonController('/user')
export default class CategoryController {

    @Inject()
    private userService: UserService;

    // 登录
    @Post('/login')
    async login(
        @Body() user: types.user.User
    ): Promise<HttpJson> {
        try {
            const result = await this.userService.login(user);
            return new HttpJson(result);
        } catch (e) {
            throw ControlError(e,'/get-category-list 调用失败');
        }
    }
}
