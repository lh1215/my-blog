import {Body, BodyParam, Get, JsonController, Post, QueryParam} from "routing-controllers";
import { Inject } from "typedi";
import * as types from '../interface/types';
import CategoryService from "../service/CategoryService";
import { HttpJson } from "../../util/HttpJson";
import { ControlError } from "../../util/PageError";

@JsonController('/category')
export default class CategoryController {

    @Inject()
    private categoryService: CategoryService;

    // 获取文章类型列表
    @Get('/get-category-list')
    async getArticleTypeList(
        @QueryParam('userId') userId: string
    ): Promise<HttpJson> {
        try {
            const result = await this.categoryService.getCategoryList();
            return new HttpJson(result);
        } catch (e) {
            throw ControlError(e,'/get-category-list 调用失败');
        }
    }

    // 添加文章类型
    @Post('/add-category')
    async addCategory(
        @Body() body: types.category.Category
    ): Promise<HttpJson> {
        try {
            const result = await this.categoryService.addCategory(body);
            return new HttpJson(result);
        } catch (e) {
            throw ControlError(e,'/add-category 调用失败');
        }
    }

    // 编辑文章类型
    @Post('/edit-category')
    async editCategory(
        @Body() body: types.category.Category
    ): Promise<HttpJson> {
        try {
            const result = await this.categoryService.editCategory(body);
            return new HttpJson(result);
        } catch (e) {
            throw ControlError(e,'/add-category 调用失败');
        }
    }

    // 删除文章类型
    @Post('/delete-category')
    async deleteCategory(
        @BodyParam('categoryId') categoryId: string
    ): Promise<HttpJson> {
        try {
            const result = await this.categoryService.deleteCategoryById(categoryId);
            return new HttpJson(result);
        } catch (e) {
            throw ControlError(e,'/add-category 调用失败');
        }
    }
}
