import * as types from '../interface/types';
import Article from '../model/article.model';
import {Types} from "mongoose";

export default class ArticleDao {

    // 获取文章列表
    async getArticleList(title: string, page: types.article.page, userId: string, typeId: string): Promise<any> {
        try {
            const result = await new Promise((resolve, reject) => {
                Article.find({$and: [
                        {$or: [{title: {$regex: title, $options: '$i'}}, {type_id: {$in: typeId}}]},
                    ]}, (err, docs) => {
                    if (!err) {
                        resolve(docs);
                    } else {
                        reject(err);
                    }
                }).skip((parseInt(page.currentPage)-1) * parseInt(page.pageSize)).limit(parseInt(page.pageSize)).sort({"createdAt": 1});
            });
            return result;
        } catch (e) {
            throw e;
        }
    }

    // 添加文章
    async addArticle(article: types.article.Article): Promise<types.common.Response> {
        try {
            const articleModel = new Article(article);
            const result = await new Promise((resolve, reject) => {
                articleModel.save((res) => {
                    resolve(res);
                });
            });
            return result;
        } catch (e) {
            throw e;
        }
    }

    // 根据id获取文章
    async getArticleById(articleId: string): Promise<types.common.Response> {
        try {
            const result = await new Promise((resolve, reject) => {
                Article.find({_id: Types.ObjectId(articleId)}, (err, category) => {
                    if (!err) {
                        resolve(category);
                    } else {
                        reject(err);
                    }
                }).limit(1);
            });
            return result;
        } catch (e) {
            throw e;
        }
    }

    // 根据id修改类型
    async editArticle(article: types.article.Article): Promise<types.common.Response> {
        try {
            const result = await new Promise((resolve, reject) => {
                Article.findByIdAndUpdate(article.id, {
                    title: article.title,
                    content: article.content,
                    type_id: article.type_id,
                }, (err, article: any) => {
                    if (!err) {
                        resolve(true);
                    } else {
                        reject(err);
                    }
                });
            })
            return result;
        } catch (e) {
            throw e;
        }
    }
    //
    // // 根据 id 删除category
    async deleteArticle(articleId: string, isDelete: boolean): Promise<types.common.Response> {
        try {
            const result = await new Promise((resolve, reject) => {
                Article.findByIdAndUpdate(articleId, {is_delete: isDelete}, (err, category: any) => {
                    if (!err) {
                        resolve(true);
                    } else {
                        reject(err);
                    }
                });
            });
            return result;
        } catch (e) {
            throw e;
        }
    }
}
