const getRandomInt = (max) => { 
    return Math.floor(Math.random() * max);
}

const getStringNum = (num) => {
    
    if (!num)
        return;

    const symbol = num > 0 ? "+" : "-";
    return symbol + Math.abs(num);
}

export { getRandomInt, getStringNum };

