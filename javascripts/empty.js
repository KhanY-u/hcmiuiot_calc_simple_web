function decToHexa(n) {
    var hexaDeciNum = new String();
    var i = 0;
    while (n != 0) {
        var temp = 0;
        temp = n % 16;
        if (temp < 10) {
            hexaDeciNum[i] = temp + 48;
            i++;
        } else {
            hexaDeciNum[i] = temp + 55;
            i++;
        }
        n = Math.floor(n / 16);
    }
    for (var j = i - 1; j >= 0; j--)
        console.log(String.fromCharCode(hexaDeciNum[j]));
}

function hexaToDec(hexVal) {
    var len = hexVal.length;
    var base = 1;
    var dec_val = 0;
    for (var i = (len - 1); i >= 0; i--) {
        if (hexVal[i] >= '0' && hexVal[i] <= '9') {
            a = hexVal.charCodeAt(i)
            dec_val += (a - 48) * base;
            base = base * 16;
        } else if (hexVal[i] >= 'A' && hexVal[i] <= 'F') {
            b = hexVal.charCodeAt(i)
            dec_val += (b - 55) * base;
            base = base * 16;
        }
    }
    return dec_val;
}

function decToOct(n) {
    var octalNum = new String();
    var i = 0;
    while (n != 0) {
        octalNum[i] = n % 8;
        n = Math.floor(n / 8);
        i++;
    }
    for (var j = i - 1; j >= 0; j--)
        console.log(octalNum[j]);
}

function octToDec(n) {
    var num = n;
    var dec_value = 0;
    var base = 1;
    var temp = num;
    while (temp) {
        var last_digit = temp % 10;
        temp = Math.floor(temp / 10);
        dec_value += last_digit * base;
        base = base * 8;
    }

    return dec_value;
}

function decToBi(n) {
    var binaryNum = new String();
    var i = 0;
    while (n > 0) {
        binaryNum[i] = n % 2;
        n = Math.floor(n / 2);
        i++;
    }
    for (var j = i - 1; j >= 0; j--)
        console.log(binaryNum[j]);
}

function biToDec(n) {
    var num = n.toString();
    var dec_value = 0;
    var base = 1;
    var len = num.length;
    for (var i = len - 1; i >= 0; i--) {
        if (num[i] == '1')
            dec_value += base;
        base = base * 2;
    }
    return dec_value
}
