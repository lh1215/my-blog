import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,   // 不可重复约束
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    article_ids: {
        type: Array
    },
    description: {
        type: String,
        default: ''
    },
    sex: {
        type: String,
    }
}, {
    timestamps: true,
    versionKey: false,
});

export default mongoose.model('user', UserSchema);
