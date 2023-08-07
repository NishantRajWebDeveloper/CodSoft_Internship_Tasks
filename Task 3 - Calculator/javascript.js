let string = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.value == "=") {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.value == "AC") {
            let val = document.querySelector("input").value;
            document.querySelector("input").value = val.substr(0, val.length - 1);
            string = document.querySelector("input").value;
        }
        else if (e.target.value == "C") {
            string = "";
            document.querySelector('input').value = string;
        }
        else {
            string = string + e.target.value;
            document.querySelector('input').value = string;
        }
    })
}) 
