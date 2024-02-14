document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert() {
    
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celcius = document.getElementById("celcius").value;
    
    if (fahrenheit != '') {
        celcius = (parseFloat(fahrenheit) -32) /1.8;
    } else {
        fahrenheit = (parseFloat(celcius) * 1.8) + 32;
    }

    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('celcius').value = parseFloat(celcius).toFixed(1);

}

function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celcius').value = '';

}

