import {Inject} from "typedi";
import ArticleTypeDao from "../dao/ArticleTypeDao";
import {Context} from "koa";
import {guid} from "../util/guid";
import {QueryParam} from "routing-controllers";

export default class ArticleTypeService {
    @Inject()
    private articleTypeDao: ArticleTypeDao;

    // 添加文章类型
    async addArticleType(ctx: Context, type_name: string): Promise<any> {
        try {
            const user_id = ctx.state.user.user_id;
            const type_id = guid();
            const result = await this.articleTypeDao.addArticleType(type_id, user_id, type_name);
            return result;
        } catch (e) {
            throw e;
        }
    }

    // 修改文章类型
    async updateActicleTypeById(type_id: string, type_name: string): Promise<any> {
        try {
            const result = await this.articleTypeDao.updateArticleTypeById(type_id, type_name);
            return result;
        } catch (e) {
            throw e;
        }
    }

    // 删除文章类型
    async deleteArticleTypeById(type_id: string): Promise<any> {
        try {
            const result = await this.articleTypeDao.deleteArticleTypeById(type_id);
            return result;
        } catch (e) {
            throw e;
        }
    }

    // 获取文章类型列表
    async getArticleTypeList(
        @QueryParam('userId') userId: string
    ): Promise<any> {
        try {
            const result = await this.articleTypeDao.getArticleTypeList(userId);
            return result;
        } catch (e) {
            throw e;
        }
    }

    // 根据id获取文章类型
    async getArticleTypeInfo(
        @QueryParam('typeId') typeId: string
    ): Promise<any> {
        try {
            const result = await this.articleTypeDao.getArticleTypeInfoById(typeId);
            return result;
        } catch (e) {
            throw e;
        }
    }
}

