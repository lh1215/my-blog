import * as types from '../interface/types';
import Category from '../model/category.model';
import {Types} from "mongoose";

export default class ArticleDao {

    // 获取类型列表
    async getCategoryList(): Promise<any> {
        try {
            const result = await new Promise((resolve, reject) => {
                Category.find({}, '_id name article_account',(err, docs) => {
                    if (!err) {
                        resolve(docs);
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

    // 添加类型
    async addCategory(obj: types.category.Category): Promise<types.common.Response> {
        try {
            const category = new Category(obj);
            const result = await new Promise((resolve, reject) => {
                category.save((res) => {
                    resolve(res);
                });
            });
            return result;
        } catch (e) {
            throw e;
        }
    }

    // 根据id获取类型
    async getCategoryById(categoryId: string): Promise<types.common.Response> {
        try {
            const result = await new Promise((resolve, reject) => {
                Category.find({_id: Types.ObjectId(categoryId)}, (err, category) => {
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

    // 根据名称获取类型
    async getCategoryByName(name: string): Promise<types.common.Response> {
        try {
            const result = await new Promise((resolve, reject) => {
                Category.find({name: name}, (err, category) => {
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
    async editCategoryById(category: types.category.Category): Promise<types.common.Response> {
        try {
            const result = await new Promise((resolve, reject) => {
                Category.findByIdAndUpdate(category.id, {name: category.name}, (err, category: any) => {
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

    // 根据 id 删除category
    async deleteCategoryById(categoryId: string): Promise<types.common.Response> {
        try {
            // const id = categoryId;
            const result = await new Promise((resolve, reject) => {
                Category.findByIdAndRemove(categoryId, {select: categoryId}, (err, category: any) => {
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
