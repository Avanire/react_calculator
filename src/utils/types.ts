import {JSXElementConstructor, ReactElement, ReactNode} from "react";

export interface ICalculatorButton {
    readonly children: string;
    readonly extraClass?: string;
    readonly handleClick: (children: string) => void
}

export interface ICalculatorConstructor {
    readonly constructor: Array<IConstructorElement>;
    readonly type: string;
    readonly firstNumber: number;
    readonly operator: string;
    readonly result: string;
    readonly display: string;
}

export interface IConstructorElement {
    readonly id: string;
    readonly element: ReactElement<JSXElementConstructor<ReactNode>>;
    readonly isExists: boolean;
}

export interface IDragAreaElement {
    readonly index: number;
    readonly id: string;
    readonly element: ReactElement<JSXElementConstructor<ReactNode>>;
    readonly moveCard: (dragIndex: number, hoverIndex: number) => void
}

export interface IPositionChangeObj {
    readonly dragIndex: number;
    readonly hoverIndex: number;
}

export interface IDragItem {
    index: number
    id: string
}

export interface IXYCoord {
    x: number;
    y: number;
}