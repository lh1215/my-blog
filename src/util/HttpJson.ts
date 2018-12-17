import { RetCodeEnum } from "./RetCodeEnum";

export class HttpJson {
    retCode: RetCodeEnum;
    retMsg: string;
    data: any;

    constructor(data: any = "", retCode: RetCodeEnum = RetCodeEnum.CORRECT, retMsg: string = "") {
        this.retCode = retCode;
        this.retMsg = retMsg;
        this.data = data;
    }
}
