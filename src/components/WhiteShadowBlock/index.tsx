import React from 'react';
import './WhiteShadowBlock.scss'
import classNames from "classnames";
import {WhiteShadowBlockInterface} from "./WhiteShadowBlock.interface";

export const WhiteShadowBlock = ({children,classname} : WhiteShadowBlockInterface) : JSX.Element => (
    <div className={classNames("block", classname)}>
        {children}
    </div>
)
