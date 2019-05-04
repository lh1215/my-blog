import { HttpError} from "routing-controllers";
import {HttpJson} from "./HttpJson";
import {RetCodeEnum} from "./RetCodeEnum";

function getErrMessage(retMsg:any){
    let errMessage:string;
    if (typeof retMsg === "object") {
        if (retMsg.details !== undefined && typeof retMsg.details ==="string") {
            errMessage = retMsg.details;
        }
        if (retMsg.message !== undefined && typeof retMsg.message ==="string") {
            errMessage = retMsg.message;
        }
        else {
            errMessage = "未知错误";
        }
    }
    else if (typeof retMsg === "string") {
        errMessage=retMsg;
    }
    else{
        errMessage="未知错误";
    }
    return errMessage;
}

export class PageError extends HttpError {
    public retCode: RetCodeEnum;
    public retMsg: string;
    public data: any;

    constructor(retCode: RetCodeEnum = RetCodeEnum.CORRECT, retMsg: any, data: any = "") {
        super(200);
        Object.setPrototypeOf(this, PageError.prototype);

        if (retCode == RetCodeEnum.CONTROLLER_CALL_ERR_CODE) {
            console.error(retMsg);
        }
        let errMessage:string=getErrMessage(retMsg);

        if (typeof retMsg === "object") {
            if(retMsg.retCode){
                this.retCode = retMsg.retCode;
                this.retMsg = retMsg.retMsg;
                this.data = retMsg.data;
                return;
            }
        }

        this.retCode = retCode;
        this.retMsg = errMessage;
        this.data = data;
    }

    toJSON() {
        return new HttpJson(this.data,this.retCode,this.retMsg);
    }
}

export function  ControlError(err:any,errTip:string):PageError{
    if(err.retCode!==undefined){
        let retCode=err.retCode;
        let retMsg=err.retMsg;
        return new PageError(retCode,retMsg);
    }
    else{
        console.error(errTip,err);
        return new PageError(RetCodeEnum.CONTROLLER_CALL_ERR_CODE, err.message);
    }
}


export {RetCodeEnum}
