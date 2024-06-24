// select all filterabale card and buttons
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-Cards .card");



//define the filtercard function
const filterCard = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    //iterate over each  filterable cards
    filterableCards.forEach(card => {
    // add hide class to hide the card initially 
    card.classList.add("hide");
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name ==="all"){
        card.classList.remove("hide");
    }
});
};


//adding click event listener to each filter buttons

filterButtons.forEach(button => button.addEventListener("click", filterCard));
