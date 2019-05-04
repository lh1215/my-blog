export enum RetCodeEnum {
    // 正常 = 0,
    CORRECT = 0,

    // 未登录 = 1
    LOGIN_OUT = 10001,

    // 请求失败
    MIDDLEWARE_ERROR_CODE = 10002,

    // 参数不合法
    PARAMETERS_ILLEGAL = 10003,
    PARAMETERS_ILLEGAL_MSG = '参数不合法',

    // 通常错误
    GENERAL_ERROR = 10004,

    // 调用controller报错
    CONTROLLER_CALL_ERR_CODE = 10005,


    // 已存在
    IS_EXIST_ERR_CODE = 10006,
    IS_EXIST_ERR_MSG = '该数据已存在',

    // 登录失败
    LOGIN_CODE = 10007,
    LOGIN_CODE_MSG = '登录失败，账号或密码不存在'

}

