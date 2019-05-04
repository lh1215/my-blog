import * as mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,   // 不可重复约束
        required: true, // 必填约束
    },
    article_account: {   // 文章数
        type: Number,
        default: 0
    },
}, {
    timestamps: true,
    versionKey: false,
});

export default mongoose.model('category', CategorySchema);
