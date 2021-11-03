document.getElementById('16gb-memory-btn').addEventListener('click', function() {
    //get and update previous and current cost
    const extraMemoryCost = document.getElementById('memory-cost');
    const previousCost = extraMemoryCost.innerText;
    const newCost = parseInt(previousCost) + 180;
    extraMemoryCost.innerText = newCost;

    // update total cost
    const bestPrice = document.getElementById('best-price');
    const newBestPrice = bestPrice.innerText;
    const newTotalCost =  parseInt(newBestPrice) + parseInt(newCost);

    const totalCost = document.getElementById('total-price');
    totalCost.innerText = newTotalCost;

    //update bottom total cost
    document.getElementById('bottom-total').innerText = newTotalCost;

})

document.getElementById('8gb-memory-btn').addEventListener('click', function() {
    
})