import {Inject} from "typedi";
import * as types from '../interface/types';
import CategoryDao from "../dao/CategoryDao";
import {PageError, RetCodeEnum} from "../../util/PageError";

export default class CategoryService {
    @Inject()
    private categoryDao: CategoryDao;

    // 获取文章类型列表
    async getCategoryList(): Promise<any> {
        try {
            const result = await this.categoryDao.getCategoryList();
            return result;
        } catch (e) {
            throw e;
        }
    }

    // 添加文章类型
    async addCategory(category: types.category.Category): Promise<any> {
        try {
            const categoryByName: any = await this.categoryDao.getCategoryByName(category.name);
            if (categoryByName.length != 0 && categoryByName[0].name === category.name) {
                throw new PageError(RetCodeEnum.IS_EXIST_ERR_CODE, RetCodeEnum.IS_EXIST_ERR_MSG);
            }
            const result = await this.categoryDao.addCategory(category);
            return result;
        } catch (e) {
            throw e;
        }
    }

    // 修改文章类型
    async editCategory(category: types.category.Category): Promise<any> {
        try {
            const categoryByName: any = await this.categoryDao.getCategoryByName(category.name);
            if (categoryByName.length !=0 && categoryByName[0].id !== category.id) {
                throw new PageError(RetCodeEnum.IS_EXIST_ERR_CODE, RetCodeEnum.IS_EXIST_ERR_MSG);
            }
            const result = await this.categoryDao.editCategoryById(category);
            return result;
        } catch (e) {
            throw e;
        }
    }

    // 根据id删除文章类型
    async deleteCategoryById(categoryId: string): Promise<any> {
        try {
            const result = await this.categoryDao.deleteCategoryById(categoryId);
            return result;
        } catch (e) {
            throw e;
        }
    }
}
