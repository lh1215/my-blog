import { db } from '../util/db';
import { guid } from '../util/guid';

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
            const articleList: any = await db('SELECT * FROM article where user_id = ? and article_id > (?-1)*? limit ?; ', {userId, pageNum, pageSize, pageSize});
        
            return {list: articleList, tatol: articleList.length};
        } catch (e) {
            throw e
        }
    }
}
