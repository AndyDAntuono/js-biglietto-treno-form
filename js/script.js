const btn = document.getElementById("calculate-price");
btn.addEventListener("click", function (){
    let name_and_surname = document.getElementById("name_and_surname").value;
    let total_km = document.getElementById("total_km").value;
    let age = document.getElementById("age").value;

    console.log(name_and_surname, total_km, age)
})