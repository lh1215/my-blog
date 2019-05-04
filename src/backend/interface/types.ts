export namespace category{
    export interface Category {
        id: string
        name: string;
        article_account?: Number
    }
}
export namespace common {
    export interface Request {}
    export interface Response {}
}

export namespace article {
    export interface Article {
        id: string,
        uerId: string,
        title: string,
        author: string,
        type_id: any,
        image: string,
        content: string
    }
    export interface page {
        pageSize: string,
        currentPage: string
    }
}

export namespace user {
    export interface User {
        name: string,
        password: string
    }
}
