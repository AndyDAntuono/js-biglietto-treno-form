const button = document.getElementById("calculate-price");
button.addEventListener("click", function () {
    let firstname_and_surname = document.getElementById("firstname_and_surname").value;
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
    

    const discountPrice = (fullPrice - (fullPrice * discount / 100)).toFixed(2);
    document.getElementById("firstname_and_surname").innerHTML = firstname_and_surname
    console.log(firstname_and_surname)
    console.log(fullPrice)

    document.getElementById("ticket_price").innerText = discountPrice+"€";
    


   
})