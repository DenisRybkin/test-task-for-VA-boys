import {ResultStatusType} from "antd/lib/result";
import * as React from "react";

type ParamTypes = ResultStatusType | React.ReactNode;

interface CheckResultStatusInterface {
    resultRequest : null|true|string;
    positiveResult : ParamTypes;
    negativeResult : ParamTypes;
}

export const checkResultStatus = ({resultRequest,positiveResult,negativeResult} : CheckResultStatusInterface) : ResultStatusType | ParamTypes => {
    return (resultRequest !== null) ? resultRequest === true ? positiveResult : negativeResult : positiveResult;
}