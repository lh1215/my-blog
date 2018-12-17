CREATE TABLE IF NOT EXISTS `user` (
    `user_id` VARCHAR(100) NOT NULL COMMENT '用户主键',
    `login_name` VARCHAR(20) NOT NULL COMMENT '登录名',
    `password` VARCHAR(50) NOT NULL COMMENT '密码',
    `pet_name` VARCHAR(20) COMMENT '昵称',
    `create_time` DATETIME NOT NULL COMMENT '创建时间',
    `sex` VARCHAR(2) COMMENT '性别',
    `age` INT(3) COMMENT '年龄',
    `session_id` VARCHAR(100) COMMENT '登录 sessionId',
    `invalid_time` DATETIME COMMENT 'sessionId 过期时间'
    PRIMARY KEY (`user_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `article` (
    `article_id` id int auto_increment COMMENT '文章主键',
    `title` VARCHAR(20) NOT NULL COMMENT '标题',
    `content` VARCHAR(5000) NOT NULL COMMENT '内容',
    `create_time` VARCHAR(2) COMMENT '创建时间',
    `is_delete` INT(2) DEFAULT '0' COMMENT '是否删除， 0：默认没有删除，1：删除'
    `user_id` VARCHAR(100) NOT NULL COMMENT '用户id',
    `type_id` VARCHAR(500) NOT NULL COMMENT '文章类型id',
    PRIMARY KEY (`article_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `article_type` (
    `type_id` VARCHAR(100) NOT NULL COMMENT '类型id',
    `type_name` VARCHAR(20) NOT NULL COMMENT '类型名称',
    `user_id` VARCHAR(50) NOT NULL COMMENT '用户id',
    PRIMARY KEY (`type_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
