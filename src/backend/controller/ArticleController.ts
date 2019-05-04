import {Body, BodyParam, Get, JsonController, Post, QueryParam, QueryParams} from "routing-controllers";
import { Inject } from "typedi";
import * as types from '../interface/types';
import ArticleService from "../service/ArticleService";
import { HttpJson } from "../../util/HttpJson";
import { ControlError } from "../../util/PageError";

@JsonController('/article')
export default class CategoryController {

    @Inject()
    private articleService: ArticleService;

    // 获取文章列表
    @Get('/get-article-list')
    async getArticleTypeList(
        @QueryParam('userId') userId: string,
        @QueryParam('typeId') typeId: string,
        @QueryParam('title') title: string,
        @QueryParams() page: types.article.page, // 一页显示条数
    ): Promise<HttpJson> {
        try {
            const result = await this.articleService.getArticleList(title, typeId, page, userId);
            return new HttpJson(result);
        } catch (e) {
            throw ControlError(e,'/get-category-list 调用失败');
        }
    }

    // 添加文章
    @Post('/add-article')
    async addArticle(
        @Body() article: types.article.Article
    ): Promise<HttpJson> {
        try {
            const result = await this.articleService.addArticle(article);
            return new HttpJson(result);
        } catch (e) {
            throw ControlError(e,'/get-category-list 调用失败');
        }
    }

    // 删除文章 (软删除)
    @Post('/delete-article')
    async deleteArticle(
        @BodyParam('articleId') articleId: string,
        @BodyParam('isDelete') isDelete: boolean
    ): Promise<HttpJson> {
        try {
            const result = await this.articleService.deleteArticle(articleId, isDelete);
            return new HttpJson(result);
        } catch (e) {
            throw ControlError(e,'/get-category-list 调用失败');
        }
    }

    // 修改文章
    @Post('/edit-article')
    async editArticle(
        @Body() article: types.article.Article
    ): Promise<HttpJson> {
        try {
            const result = await this.articleService.editArticle(article);
            return new HttpJson(result);
        } catch (e) {
            throw ControlError(e,'/get-category-list 调用失败');
        }
    }
}
