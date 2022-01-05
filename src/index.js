module.exports = function toReadable(number) {
    let str = number.toString();
    console.log(str);

    let hund = hundred(str);
    let dozens = "";
    let un = "";
    dozens = dec(str[1], str[2]);
    un = units(str);

    console.log(`${hund} ${dozens} ${un}`);
    let result = `${hund} ${dozens} ${un}`;

    return result;
};

function digit(x) {
    switch (x) {
        case 0:
            return "zero";
            break;
        case 1:
            return "one";
            break;
        case 2:
            return "two";
            break;
        case 3:
            return "thre";
            break;
        case 4:
            return "four";
            break;
        case 5:
            return "five";
            break;
        case 6:
            return "six";
            break;
        case 7:
            return "seven";
            break;
        case 8:
            return "eigth";
            break;
        case 9:
            return "nine";
            break;
        case 10:
            return "ten";
            break;
        case 11:
            return "eleven";
            break;
        case 12:
            return "twelve";
            break;
        case 13:
            return "thirteen";
            break;
        case 14:
            return "fourteen";
            break;
        case 15:
            return "fiveteen";
            break;
        case 16:
            return "sixteen";
            break;
        case 17:
            return "seventeen";
            break;
        case 18:
            return "eighteen";
            break;
        case 19:
            return "nineteen";
            break;
        case 20:
            return "twenty";
            break;
        case 30:
            return "thirty";
            break;
        case 40:
            return "fourty";
            break;
        case 50:
            return "fivety";
            break;
        case 60:
            return "sixty";
            break;
        case 70:
            return "seventy";
            break;
        case 80:
            return "eighty";
            break;
        case 90:
            return "ninety";
            break;
    }
}

function hundred(str) {
    if (+str[0] == 0) {
        return "";
    } else return digit(+str[0]) + " hundred";
}
function dec(dec, unit) {
    if (dec == 0) {
        return "";
    }
    if (dec == 1) {
        return digit(+(dec + unit));
    } else return digit(+(dec + "0"));
}

function units(str) {
    if (+str[2] == 0) {
        return "";
    } else {
        return digit(+str[2]);
    }
}
