function func(b){
    if (b == "clear"){
        document.getElementById("feild").innerHTML = " "
    } else if (b == "back"){
        var a = String(document.getElementById("feild").textContent)
        a = a.slice(0, a.length-1)
        document.getElementById("feild").innerHTML = a
    } else if (b != "e"){
        document.getElementById("feild").innerHTML += b
    } else if (b == "e"){
        document.getElementById("feild").innerHTML = Function("return " + document.getElementById("feild").textContent)()
    }
}
