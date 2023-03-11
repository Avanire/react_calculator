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
}