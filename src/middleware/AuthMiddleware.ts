import {KoaMiddlewareInterface, Middleware} from "routing-controllers";
import { Inject } from "typedi";
import { HttpJson } from "../util/HttpJson";
import * as _ from "lodash";
import User from "../service/UserService";
import { RetCodeEnum } from "../util/RetCodeEnum";

@Middleware({ type: "before" })
export class AuthMiddleware implements KoaMiddlewareInterface { // interface implementation is optional
    @Inject()
    private user: User;

    async use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
        const NoLoginUrls=[
            '/my-blog/user/login',
        ];
        const needLogin=_.findIndex(NoLoginUrls, (item) =>{return context.url.indexOf(item)>-1})==-1;
        if (needLogin) {
            try {
                let result: any =await this.user.getLoginInfo(context);
                console.log("login status info:"+JSON.stringify(result));
                context.state.user=result;
                if (!result.isLogin) {
                    context.response.status = 200;
                    context.response.type = "application/json";
                    context.response.body = new HttpJson("",RetCodeEnum.LOGIN_OUT,"未登录");
                    return;
                }
            } catch (err) {
                console.error('user.GetLoginInfo 调用失败',err);
                context.response.status = 200;
                context.response.type = "application/json";
                context.response.body = new HttpJson("",RetCodeEnum.MIDDLEWARE_ERROR,err.message);
                return;
            }

        }

        return next();
    }
}
