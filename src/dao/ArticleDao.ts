import { db } from '../util/db';
import * as _ from 'lodash';

export default class ArticleDao {

    // 根据文章 id 查询文章
    async getArticleById(articleId: string): Promise<any> {
        try {
            const articleInfo = await db('SELECT * FROM article WHERE article_id = ?', articleId);
            return articleInfo;
        } catch (e) {
            throw e
        }
    }

    // 获取文章列表
    async getArticleList(userId: string, pageSize: number, pageNum: number): Promise<any> {
        try {
            const articleList: any = await db('SELECT * FROM article where user_id = ? and article_id > (?-1)*? limit ?; ', {userId, pageNum, pageSize});
            return {list: articleList, tatol: articleList.length};
        } catch (e) {
            throw e
        }
    }

    // 添加文章
    async addArticle(article_id: string, title: string, content: string, user_id: string, type_id: string): Promise<any> {
        try {
            const create_time = _.now();
            const result: any = await db('INSERT INTO article VALUES (?, ?, ?, ?, ?, ?, ?)', {article_id, title, content, create_time, user_id, type_id});
            return result;
        } catch (e) {
            throw e
        }
    }

    // 更新文章
    async updateArticleById(article_id: string, title: string, content: string): Promise<any> {
        try {
            const result: any = await db('UPDATE article SET title = ?, content = ? WHERE article_id = ?', {title, content, article_id});
            return result;
        } catch (e) {
            throw e
        }
    }

    // 删除文章
    async deleteArticleById(is_delete: string, article_id: string): Promise<any> {
        try {
            const result: any = await db('UPDATE article SET is_delete = ? WHERE article_id = ?', {is_delete, article_id});
            return result
        } catch (e) {
            throw e
        }
    }
}
