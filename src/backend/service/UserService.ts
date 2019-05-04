import {Inject} from "typedi";
import * as types from '../interface/types';
import UserDao from "../dao/UserDao";
import {Md5} from 'ts-md5/dist/md5';
import * as jwt from "jsonwebtoken";
import {PageError, RetCodeEnum} from "../../util/PageError";

export default class CategoryService {
    @Inject()
    private userDao: UserDao;

    // 根据姓名和密码查询
    async login(user: types.user.User): Promise<any> {
        try {
            if (!user.password || !user.name) {
                throw new PageError(RetCodeEnum.PARAMETERS_ILLEGAL, RetCodeEnum.PARAMETERS_ILLEGAL_MSG);
            }
            user.password = Md5.hashStr(user.password) as string;
            const result: any = await this.userDao.getUserByNameAndPassWord(user);
            if (result.length !== 0) {
                const token = jwt.sign({
                    name: result.name,
                    password: result.password
                }, 'liang_hao', {expiresIn: '2h'});
                return {
                    token: token,
                    name: user.name,
                    is_login: true
                };
            } else {
                throw new PageError(RetCodeEnum.LOGIN_CODE, RetCodeEnum.LOGIN_CODE_MSG);
            }
        } catch (e) {
            throw e;
        }
    }
}
