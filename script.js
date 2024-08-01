// domcontentloaded pour executer le code une fois que le document html a ete completement charge et analyse
document.addEventListener("DOMContentLoaded", () => {
    const totalPrice = document.getElementById("total")

// selectionne tous les elements avec la class card 
    const card = document.querySelectorAll(".card")


// parcours tous les elements selectionne
    card.forEach( card => {

        const plus = card.querySelector(".fa-plus-circle")
        const moins = card.querySelector(".fa-minus-circle")
        const trash = card.querySelector(".fa-trash-alt")
        const quantite = card.querySelector(".quantity")
        const heart = card.querySelector(".fa-heart")
        const tot = card.querySelector(".total") 

// ajout d'evenement click lorqu'on click sur le bouton plus et definition de la fonction a executer
        plus.addEventListener("click", () => {
            let quantity = parseInt(quantite.textContent);
            quantity++
            quantite.textContent = quantity
            updateTotal()
        })
// ajout d'evenement click lorqu'on click sur le bouton moins et definition de la fonction a executer
        moins.addEventListener("click", () => {
            let quantity = parseInt(quantite.textContent);
            if(quantity > 0){
                quantity--
                quantite.textContent = quantity
                updateTotal()
            }
        })
// ajout d'evenement click lorqu'on click sur le bouton trash(effacer) et definition de la fonction a executer
        trash.addEventListener("click", () =>{
            card.remove()
            updateTotal()
        })
// ajout d'evenement click lorqu'on click sur le bouton coeur et definition de la fonction a executer
        heart.addEventListener("click", () =>{
            heart.classList.toggle("clicked");
        })
// definition de la fonction updatetotal appeler plus haut dans les autres fonction
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



