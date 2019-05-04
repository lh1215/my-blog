import * as mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,   // 不可重复约束
        required: true, // 必填约束
    },
    author: {   // 文章数
        type: String,
        required: true, // 必填约束
    },
    // 文章类型
    type_id: {
        type: Array,
        required: true, // 必填约束
    },
    user_id: {
        type: String,
        required: true
    },
    is_delete: {
        type: Boolean,
        default: false
    },
    // 图片
    image: {
        type: String,
        default: false
    },
    content: {
        type: String,
        required: true, // 必填约束
    }
}, {
    timestamps: true,
    versionKey: false,
});

export default mongoose.model('article', ArticleSchema);
