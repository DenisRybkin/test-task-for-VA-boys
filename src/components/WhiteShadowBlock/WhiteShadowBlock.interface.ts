import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface WhiteShadowBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    classname? : string;
    children : ReactNode
}