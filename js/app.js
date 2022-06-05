function generatePin() {
    let pin = Math.round(Math.random() * 1000000);
    pin = pin + '';
    if (pin.length == 6) {
        document.getElementById('show-pin').value = pin;
    }
    else {
        return generatePin();
    }
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const input = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            input.value = '';
        }
    }
    else {
        const previousInput = input.value;
        const newInput = previousInput + number;
        input.value = newInput;
    }

})

document.getElementById('submit-button').addEventListener("click", function () {
    const generatePin = document.getElementById('show-pin');
    const inputPin = document.getElementById('typed-numbers');
    if (generatePin.value == inputPin.value) {
        document.getElementById("pin-success").style.display = 'block';
        document.getElementById("pin-failed").style.display = 'none';

    }
    else {
        document.getElementById("pin-failed").style.display = 'block';
        document.getElementById("pin-success").style.display = 'none';
    }
    inputPin.value = '';
    generatePin.value = '';
})
document.getElementById('gnr-pin').addEventListener('click', function () {
    document.getElementById("pin-failed").style.display = 'none';
    document.getElementById("pin-success").style.display = 'none';
})


