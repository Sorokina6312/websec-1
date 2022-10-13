function buttonClickHandler()
{
    let selectorElem = document.getElementById("select1");
    console.log(selectorElem.value)

    let value1 = document.getElementById("input1").value;
    let value2 = document.getElementById("input2").value;

    var result;

    if (!isNaN(value1) && String(value1).includes(',')) {

        result = "В левом окне ввода должно быть число!";
    }
    else if (!isNaN(value2) && String(value2).includes(',')) {
        
        result = "В правом окне ввода должно быть число!";
    }

    else {

    switch (selectorElem.value){
        case 'plus':
            result = parseFloat(value1) + parseFloat(value2);
            break;
        case 'minus':
            result = parseFloat(value1) - parseFloat(value2);
            break;
        case 'multiply':
            result = parseFloat(value1) * parseFloat(value2);
            break;
        case 'division':
            if (value2 == 0)
            {
                result = "На ноль делить нельзя!";
            }
            else {
            result = parseFloat(value1) / parseFloat(value2);
            break;
            }
    }
}

    document.getElementById("results").innerText = result;
    console.log(value1,value2)
}