import {Ctx, Get, JsonController, QueryParam, Post, BodyParam} from "routing-controllers";
import {Context} from "koa";
import {Inject} from "typedi";
import ArticleService from "../service/ArticleService";
import { HttpJson } from "../util/HttpJson";

@JsonController('/article')
export default class ArticleController {

    @Inject()
    private articleService: ArticleService;

    // 获取文章列表
    @Get('/get-article-list')
    async getArticleList(
        @QueryParam('pageSize') pageSize: number,
        @QueryParam('pageNum') pageNum: number,
        @Ctx() ctx: Context
    ): Promise<HttpJson> {
        try {
            const result = await this.articleService.getArticleList(ctx, pageSize, pageNum);
            return new HttpJson(result);
        } catch (e) {
            throw e;
        }
    }

    // 添加文章
    @Post('/add-article')
    async addArticle(
        @BodyParam('title') title: string,
        @BodyParam('content') content: string,
        @BodyParam('type_id') type_id: string,
        @Ctx() ctx: Context
    ): Promise<HttpJson> {
        try {
            const result = await this.articleService.addArticle(ctx, title, content, type_id);
            return new HttpJson(result);
        } catch (e) {
            throw e;
        }
    }

    // 修改文章
    @Post('/update-article')
    async updateArticleById(
        @BodyParam('title') title: string,
        @BodyParam('content') content: string,
        @BodyParam('articleId') articleId: string,
    ): Promise<any> {
        try {
            const result = await this.articleService.updateArticleById(articleId, title, content);
            return new HttpJson(result);
        } catch (e) {
            throw e;
        }
    }

    // 删除文章
    @Post('/delete-article')
    async deleteArticle(
        @BodyParam('isDelete') isDelete: string,
        @BodyParam('articleId') articleId: string,
    ): Promise<any> {
        try {
            const result = await this.articleService.deleteArticleById(isDelete, articleId);
            return new HttpJson(result);
        } catch (e) {
            throw e;
        }
    }

}
