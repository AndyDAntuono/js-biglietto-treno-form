const btn = document.getElementById("calculate-price");
btn.addEventListener("click", function (){
    let name_and_surname = document.getElementById("name_and_surname").value;
    let total_km = document.getElementById("total_km").value;
    let age = document.getElementById("age").value;
    const fullPrice = total_km * 0.21
    let discount = 0;
    
    if(age === "minor" ) {
    discount = 20;
}

else if(age === "senior") {
    discount = 40;
}

const discountPrice = (fullPrice - (fullPrice * discount / 100)).toFixed(2)


    console.log(name_and_surname, total_km, age, discountPrice)
})