document.addEventListener("DOMContentLoaded", function(){
    const button = document.querySelector("button")
    const themeStatus = document.getElementById("themeStatus")

    button.onclick = function(){
        if(document.body.classList.contains("night-theme"))
        {
            document.body.classList.remove("night-theme")
            themeStatus.textContent = "Modo: Claro"
        }
        else
        {
            document.body.classList.add("night-theme")
            themeStatus.textContent = "Modo: Escuro"
        }
    }
})