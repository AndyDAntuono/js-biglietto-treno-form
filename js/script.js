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

    document.getElementById("ticket_price").innerHTML = discountPrice+"€";
    //document.getElementById("passenger_name").innerHTML = firstname_and_surname;
    //// Returns a random integer from 0 to 9:Math.floor(Math.random() * 10); 574
    //let message_standard = `Biglietto standard`
    //let message_minor = `Biglietto scontato per minorenni`
    //let message_senior = `Biglietto scontato per over65`
    


   
})