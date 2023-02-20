module.exports = function check(str, bracketsConfig) {
    let OPEN_BRACKETS = [];
    let BRACKETS_PAIR = {};
    let REPEATED_SYMBOL = [];

    let stack = [];

    bracketsConfig.forEach(([openSymbol, closeSymbol]) => {
        OPEN_BRACKETS.push(openSymbol);
        BRACKETS_PAIR[closeSymbol] = openSymbol;
        if (closeSymbol == openSymbol) {
            REPEATED_SYMBOL.push(closeSymbol);
        }
    });

    for (let i = 0; i < str.length; i++) {
        const currentSymbol = str[i];
        let topElement = stack[stack.length - 1];

        if (BRACKETS_PAIR[currentSymbol] === topElement && REPEATED_SYMBOL.includes(currentSymbol)) {
            stack.pop();
        } else if (OPEN_BRACKETS.includes(currentSymbol)) {
            stack.push(currentSymbol);
        } else {
            if (stack.length === 0) {
                return false;
            }

            if (BRACKETS_PAIR[currentSymbol] === topElement) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};
