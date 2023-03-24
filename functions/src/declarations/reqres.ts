import { Request } from "express"

interface IReq<T> extends Request{
    body: T
}

export {
    IReq
}