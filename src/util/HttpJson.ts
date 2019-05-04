import { RetCodeEnum } from "./RetCodeEnum";

export class HttpJson {
    retCode: RetCodeEnum;
    retMsg: string;
    data: any;

    constructor(data: any = "", retCode: RetCodeEnum = RetCodeEnum.CORRECT, retMsg: string = "") {
        const res = JSON.stringify(data);
        this.retCode = retCode;
        this.retMsg = retMsg;
        this.data = JSON.parse(res);
    }
}
