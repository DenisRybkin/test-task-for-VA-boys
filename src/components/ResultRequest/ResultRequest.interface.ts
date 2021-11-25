import {ResultStatusType} from "antd/lib/result";

export interface ResultRequestInterface {
    status : ResultStatusType;
    title : string;
    subtitle? : string;
}