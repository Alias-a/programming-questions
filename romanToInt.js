function romanToInt(s) {
    let num = 0;

    let i = 0;
    while (i < s.length){
        let numeral = s.charAt(i);
        let nextNumeral = s.charAt(i+1);

        switch (numeral) {
            case "I":
                switch (nextNumeral) {
                    case "V":
                        num += 4;
                        i++;
                        break;
                    case "X":
                        num += 9;
                        i++;
                        break;
                    default:
                        num += 1;
                }
                break;
            case "V":
                num += 5;
                break;
            case "X":
                switch (nextNumeral) {
                    case "L":
                        num += 40;
                        i++;
                        break;
                    case "C":
                        num += 90;
                        i++;
                        break;
                    default:
                        num += 10;
                }
                break;
            case "L":
                num += 50;
                break;
            case "C":
                switch (nextNumeral) {
                    case "D":
                        num += 400;
                        i++;
                        break;
                    case "M":
                        num += 900;
                        i++;
                        break;
                    default:
                        num += 100;
                }
                break;
            case "D":
                num += 500;
                break;
            case "M":
                num += 1000;
                break;
            default:
        }

        i++;
    }

    return num;
}

module.exports = romanToInt;