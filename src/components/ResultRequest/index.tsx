import React from 'react';
import {Result} from "antd";
import {ResultRequestInterface} from "./ResultRequest.interface";



export const ResultRequest = ({status,title,subtitle} : ResultRequestInterface) => {
    return (
        <Result className={'result-icon'}
            status={status}
            title={title}
            subTitle={subtitle ? subtitle : undefined}
        />
    );
};

