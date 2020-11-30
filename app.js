function changeColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById("wrapper").style.backgroundColor = '#' + randomColor;
        document.getElementById("color").style.color = '#' + randomColor;
        color.innerHTML = "#" + randomColor;
        return true;
    }
