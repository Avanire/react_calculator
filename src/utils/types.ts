export interface ICalculatorButton {
    readonly children: string;
    readonly extraClass?: string;
}
export interface ICalculatorConstructor {
    readonly constructor: Array<IConstructorElement>;
}

export interface IConstructorElement {
    readonly id: string;
    readonly element: string;
    readonly isExists: boolean;
}

export interface IDragAreaElement {
    readonly index: number;
    readonly id: string;
    readonly element: string;
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