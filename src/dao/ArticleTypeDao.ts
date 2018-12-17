import { db } from '../util/db';

export default class ArticleDao {

    // 获取类型列表
    async getArticleTypeList(userId: string): Promise<any> {
        try {
            const result = await db('SELECT * FROM article_type WHERE user_id = ?', {userId});
            return result;
        } catch (e) {
            throw e;
        }
    }

    // 根据类型id获取类型
    async getArticleTypeInfoById(type_id: string): Promise<any> {
        try {
            const articleType: any = await db('SELECT * FROM article_type WHERE type_id = ?', {type_id});
            return articleType;
        } catch (e) {
            throw e
        }
    }

    // 添加文类型
    async addArticleType(type_id: string, user_id: string, type_name: string): Promise<any> {
        try {
            const result: any = await db('INSERT INTO article_type VALUES (?, ?, ?)', {type_id, type_name, user_id});
            return result;
        } catch (e) {
            throw e
        }
    }

    // 更新类型
    async updateArticleTypeById(type_id: string, type_name: string): Promise<any> {
        try {
            const result: any = await db('UPDATE article_type SET type_name = ? WHERE type_id = ?', {type_id, type_name});
            return result;
        } catch (e) {
            throw e
        }
    }

    // 删除类型
    async deleteArticleTypeById(type_id: string): Promise<any> {
        try {
            const result: any = await db('DELETE FROM article_type WHERE type_id = ?', {type_id});
            return result;
        } catch (e) {
            throw e
        }
    }
}
