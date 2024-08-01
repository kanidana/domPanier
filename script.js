// 
document.addEventListener("DOMContentLoaded", () => {
    const totalPrice = document.getElementById("total")
    const card = document.querySelectorAll(".card")

    card.forEach( card => {

        const plus = card.querySelector(".fa-plus-circle")
        const moins = card.querySelector(".fa-minus-circle")
        const trash = card.querySelector(".fa-trash-alt")
        const quantite = card.querySelector(".quantity")
        const heart = card.querySelector(".fa-heart")
        const tot = card.querySelector(".total") 


        plus.addEventListener("click", () => {
            let quantity = parseInt(quantite.textContent);
            quantity++
            quantite.textContent = quantity
            updateTotal()
        })

        moins.addEventListener("click", () => {
            let quantity = parseInt(quantite.textContent);
            if(quantity > 0){
                quantity--
                quantite.textContent = quantity
                updateTotal()
            }
        })

        trash.addEventListener("click", () =>{
            card.remove()
            updateTotal()
        })

        heart.addEventListener("click", () =>{
            heart.classList.toggle("clicked");
        })

        function updateTotal(){
            let total = 0;
            document.querySelectorAll(".card").forEach(card =>{
                const quantity = parseInt(card.querySelector(".quantity").textContent)
                const price = parseInt(card.querySelector(".unit-price").textContent)
                total += quantity*price
            })
             
            totalPrice.textContent = total + "$";
        }

    })
})



