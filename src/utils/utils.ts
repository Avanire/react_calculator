export const calculatorFunction = (num1: number, num2: number, method: string) => {
    switch (method) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "X":
            return num1 * num2;
        case "/":
            return num2 > 0 ? num1 / num2 : 'Не определено';
    }
}

export const roundNumber = (num: number, sign: number) => {
    return (Math.floor(num * Math.pow(10, sign))) / Math.pow(10, sign)
}