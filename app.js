



function changeColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = '#' + randomColor;
        color.innerHTML = "#" + randomColor;
        return true;
    }
