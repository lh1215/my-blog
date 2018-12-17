import {Get, JsonController, Post, Ctx, BodyParam, QueryParam} from "routing-controllers";
import { Inject } from "typedi";
import ArticleTypeService from "../service/ArticleTypeService";
import { HttpJson } from "../util/HttpJson";
import {Context} from "koa";

@JsonController('/article-type')
export default class ArticleTypeController {

    @Inject()
    private articleTypeService: ArticleTypeService;

    // 添加文章类型
    @Post('/add-articleType')
    async addArticleType(
        @BodyParam('typeName') typeName: string,
        @Ctx() ctx: Context
    ): Promise<HttpJson> {
        try {
            const result = await this.articleTypeService.addArticleType(ctx, typeName);
            return new HttpJson(result);
        } catch (e) {
            throw e
        }
    }

    // 修改文章类型
    @Post('/edit-articleType')
    async editArticleType(
        @BodyParam('typeName') typeName: string,
        @BodyParam('typeId') typeId: string,
        @Ctx() ctx: Context
    ): Promise<HttpJson> {
        try {
            const result = await this.articleTypeService.updateActicleTypeById(typeId, typeName);
            return new HttpJson(result);
        } catch (e) {
            throw e
        }
    }


    // 获取文章类型列表
    @Get('/get-articleType-list')
    async getArticleTypeList(
        @QueryParam('userId') userId: string
    ): Promise<any> {
        try {
            const result = await this.articleTypeService.getArticleTypeList(userId);
            return new HttpJson(result);
        } catch (e) {
            throw e;
        }
    }

    // 根据id获取文章类型
    @Get('/get-articleType-info')
    async getArticleTypeInfoById(
        @QueryParam('typeId') typeId: string
    ): Promise<any> {
        try {
            const result = await this.articleTypeService.getArticleTypeInfo(typeId);
            return new HttpJson(result);
        } catch (e) {
            throw e;
        }
    }

    // 删除文章类型
    @Post('/delete-articleType-info')
    async deleteArticleTypeById(
        @BodyParam('typeId') typeId: string
    ): Promise<any> {
        try {
            const result = await this.articleTypeService.deleteArticleTypeById(typeId);
            return new HttpJson(result);
        } catch (e) {
            throw e;
        }
    }
}
