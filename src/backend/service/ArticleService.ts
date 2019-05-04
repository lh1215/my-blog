import {Inject} from "typedi";
import ArticleDao from "../dao/ArticleDao";
import * as types from "../interface/types";
// import {PageError, RetCodeEnum} from "../../util/PageError";

export default class CategoryService {
    @Inject()
    private articleDao: ArticleDao;

    // 获取文章列表
    async getArticleList(title: string, typeId: string, page: types.article.page, userId :string): Promise<any> {
      try {
        const result = await this.articleDao.getArticleList(title, page, userId, typeId);
        return result;
      } catch (e) {
        throw e;
      }
    }

    async addArticle(article: types.article.Article): Promise<any> {
        try {
            const result = await this.articleDao.addArticle(article);
            return result;
        } catch (e) {
            throw e;
        }
    }

    async deleteArticle(articleId: string, isDelete: boolean): Promise<any> {
        try {
            const result = await this.articleDao.deleteArticle(articleId, isDelete);
            return result;
        } catch (e) {
            throw e;
        }
    }

    async editArticle(article: types.article.Article): Promise<any> {
        try {
            const result = await this.articleDao.editArticle(article);
            return result;
        } catch (e) {
            throw e;
        }
    }


}
