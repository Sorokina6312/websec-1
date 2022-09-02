function buttonClickHandler()
{
    let selectorElem = document.getElementById("select1");
    console.log(selectorElem.value)

    let value1 = document.getElementById("input1").value;
    let value2 = document.getElementById("input2").value;
    if (isNaN(value1)|| isNaN(value2)){
        System.out.println("Error");
    }
    var result;
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
            result = parseFloat(value1) / parseFloat(value2);
            break;
    }

    document.getElementById("results").innerText = result;
    console.log(value1,value2)
}