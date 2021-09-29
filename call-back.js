let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "peanuts"]
};
stocks.Fruits[2];

let order = (fruit_name, call_production, liquid) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} was seleted `);
        call_production();
    }, 2000);
};

let production = () => {
    setTimeout(() => {
        console.log("production has started");
        setTimeout(() => {
            console.log("the jus has been chopped");
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added `);
                setTimeout(() => {
                    console.log("the machine has started");
                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} has been selected `);
                        setTimeout(() => {
                            console.log(`${stocks.topping[0]} was added as topping `);
                            setTimeout(() => {
                                console.log("ice crearm is ready to go ");
                            }, 4000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
};

order(3, production);
