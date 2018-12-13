CREATE TABLE IF NOT EXISTS `user` (
    `user_id` VARCHAR(50) NOT NULL COMMENT '用户主键',
    `login_name` VARCHAR(20) NOT NULL COMMENT '登录名',
    `password` VARCHAR(50) NOT NULL COMMENT '密码',
    `pet_name` VARCHAR(20) COMMENT '昵称',
    `create_time` DATE NOT NULL COMMENT '创建时间',
    `sex` VARCHAR(2) COMMENT '性别',
    `age` INT(3) COMMENT '年龄',
    PRIMARY KEY (`user_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `article` (
    `article_id` id int auto_increment COMMENT '文章主键',
    `title` VARCHAR(20) NOT NULL COMMENT '标题',
    `author` VARCHAR(50) NOT NULL COMMENT '作者',
    `content` DATE NOT NULL COMMENT '创建时间',
    `create_time` VARCHAR(2) COMMENT '性别',
    `thumbs_up` INT(10) COMMENT '点赞数',
    `browse_volume` INT(10) NOT NULL COMMENT '浏览量',
    `user_id` VARCHAR(50) NOT NULL COMMENT '用户id',
    `type_id` VARCHAR(50) NOT NULL COMMENT '文章类型id',
    PRIMARY KEY (`article_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `article_type` (
    `type_id` VARCHAR(50) NOT NULL COMMENT '类型id',
    `type_name` VARCHAR(20) NOT NULL COMMENT '类型名称',
    `user_id` VARCHAR(50) NOT NULL COMMENT '用户id',
    PRIMARY KEY (`type_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
