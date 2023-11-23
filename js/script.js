if (localStorage.getItem("contador") === null) {
    localStorage.setItem("contador", 1);
} else {
    localStorage.setItem("contador",
    parseInt(localStorage.getItem("contador")) + 1);
};

document.getElementById("contadorVisitas").innerHTML = localStorage.getItem("contador");

document.getElementById("btnReestablecer").addEventListener("click", () => {
    localStorage.setItem("contador", 1);
    document.getElementById("contadorVisitas").innerHTML = localStorage.getItem("contador");
});