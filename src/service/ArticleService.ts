import {Inject, Service} from "typedi";
import ArticleDao from "../dao/ArticleDao";
import ArticleTypeDao from "../dao/ArticleTypeDao";
import {guid} from "../util/guid";
import {Context} from "koa";

@Service()
export default class ArticleService {
    @Inject()
    private articleDao: ArticleDao;
    @Inject()
    private articleTypeDao: ArticleTypeDao;

    // 根据id获取文章详情
    async getArticleById(articleId: string): Promise<any> {
        try {
            const result = await this.articleDao.getArticleById(articleId);
            return result;
        } catch (e) {
            throw e
        }
    }

    // 获取文章列表
    async getArticleList(ctx: Context, pageSize: number, pageNum: number): Promise<any> {
        try {
            const userId = ctx.state.user.user_id;
            let articleList = await this.articleDao.getArticleList(userId, pageSize, pageNum);
            for (let i = 0; i < i < articleList.length; i++) {
                const typeIds = articleList[i].type_id.split(',');
                for (let j = 0; j < typeIds.length; j++) {
                    const typeInfo = await this.articleTypeDao.getArticleTypeList(typeIds[j]);
                    articleList[i].typeInfo = typeInfo;
                }
            }
            return articleList;
        } catch (e) {
            throw e;
        }
    }

    // 添加文章
    async addArticle(ctx: Context, title: string, content: string, type_id: string): Promise<any> {
        try {
            const article_id = guid();
            const user_id = ctx.state.user.user_id;
            const result = await this.articleDao.addArticle(article_id, title, content, user_id, type_id);
            return result;
        } catch (e) {
            throw e
        }
    }

    // 修改文章
    async updateArticleById(article_id: string, title: string, content: string): Promise<any> {
        try {
            const result = await this.articleDao.updateArticleById(article_id, title, content);
            return result;
        } catch (e) {
            throw e
        }
    }

    // 删除文章
    async deleteArticleById(is_delete: string, article_id: string): Promise<any> {
        try {
            const result = await this.articleDao.deleteArticleById(is_delete, article_id);
            return result;
        } catch (e) {
            throw e;
        }
    }
}
