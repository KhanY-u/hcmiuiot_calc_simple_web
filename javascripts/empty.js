function binary(val_1, val_2) {
    var plus = Number(parseInt(val_1, 2).toString(10)) + Number(parseInt(val_2, 2).toString(10));
    var minus = Number(parseInt(val_1, 2).toString(10)) - Number(parseInt(val_2, 2).toString(10));
    var mult = Number(parseInt(val_1, 2).toString(10)) * Number(parseInt(val_2, 2).toString(10));
    var divi = Number(parseInt(val_1, 2).toString(10)) / Number(parseInt(val_2, 2).toString(10));
    document.getElementById('Result').value = (parseInt(plus, 10).toString(2));
    document.getElementById('Result').value = (parseInt(minus, 10).toString(2));
    document.getElementById('Result').value = (parseInt(mult, 10).toString(2));
    if (Number(parseInt(val_2, 2).toString(10)) = 0) {
        document.getElementById('Result').value = ("no calcate")
    } else
        document.getElementById('Result').value = (parseInt(divi, 10).toString(2));
}

function decimal(val_1, val_2) {
    document.getElementById('Result').value = (Number(val_1) + Number(val_2));
    document.getElementById('Result').value = (Number(val_1) - Number(val_2));
    document.getElementById('Result').value = (Number(val_1) * Number(val_2));
    if (Number(val_2) = 0) {
        document.getElementById('Result').value = ("no calcate")
    } else
        document.getElementById('Result').value = (Number(val_1) / Number(val_2));
}

function octal(val_1, val_2) {
    var plus = Number(parseInt(val_1, 8).toString(10)) + Number(parseInt(val_2, 8).toString(10));
    var minus = Number(parseInt(val_1, 8).toString(10)) - Number(parseInt(val_2, 8).toString(10));
    var mult = Number(parseInt(val_1, 8).toString(10)) * Number(parseInt(val_2, 8).toString(10));
    var divi = Number(parseInt(val_1, 8).toString(10)) / Number(parseInt(val_2, 8).toString(10));
    document.getElementById('Result').value = (parseInt(plus, 10).toString(8));
    document.getElementById('Result').value = (parseInt(minus, 10).toString(8));
    document.getElementById('Result').value = (parseInt(mult, 10).toString(8));
    if (Number(parseInt(val_2, 8).toString(10)) = 0) {
        document.getElementById('Result').value = ("no calcate")
    } else
        document.getElementById('Result').value = (parseInt(divi, 10).toString(8));
}

function hexadecimal(val_1, val_2) {
    var plus = Number(parseInt(val_1, 16).toString(10)) + Number(parseInt(val_2, 16).toString(10));
    var minus = Number(parseInt(val_1, 16).toString(10)) - Number(parseInt(val_2, 16).toString(10));
    var mult = Number(parseInt(val_1, 16).toString(10)) * Number(parseInt(val_2, 16).toString(10));
    var divi = Number(parseInt(val_1, 16).toString(10)) / Number(parseInt(val_2, 16).toString(10));
    document.getElementById('Result').value = (parseInt(plus, 10).toString(16));
    document.getElementById('Result').value = (parseInt(minus, 10).toString(16));
    document.getElementById('Result').value = (parseInt(mult, 10).toString(16));
    if (Number(parseInt(val_2, 16).toString(10)) = 0) {
        document.getElementById('Result').value = ("no calcate")
    } else
        document.getElementById('Result').value = (parseInt(divi, 10).toString(16));
}
var val_1 = document.getElementById('value_1').value;
var val_2 = document.getElementById('value_2').value;
var option = document.getElementById('choose').value;
if (option = "binary") {
    binary(val_1, val_2);
} else if (option = "decimal") {
    decimal(val_1, val_2);
} else if (option = "octal") {
    octal(val_1, val_2);
} else if (option = "hexadecimal") {
    hexadecimal(val_1, val_2);
}
