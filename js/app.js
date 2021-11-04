function updateCost(id1,id2) {
    //get and update previous and current cost
    const cost = document.getElementById(id2);
    if(id1 == '8gb-memory-btn') {
        cost.innerText = '0';
    } 
    else if(id1 == '16gb-memory-btn') {
        cost.innerText = 180;
    }
    else if(id1 == '256gb-storage-btn') {
        cost.innerText = '0';
    }
    else if(id1 == '500gb-storage-btn') {
        cost.innerText = 100;
    }
    else if(id1 == '1tb-storage-btn') {
        cost.innerText = 180;
    }
    else if(id1 == 'free-delivery-btn') {
        cost.innerText = '0';
    }
    else if(id1 == 'paid-delivery-btn') {
        cost.innerText = 20;
    }
    cost.innerText;

    //get and set selected memory cost
    const memoryCost = document.getElementById('memory-cost');
    const newMemoryCost = memoryCost.innerText;

    //get and set selected storage cost
    const storageCost = document.getElementById('storage-cost')
    const newStorageCost = storageCost.innerText;

    //get and set selected delivery charge
    const deliveryCharge = document.getElementById('delivery-charge');
    const newDeliveryCharge = deliveryCharge.innerText;

    // update total cost
    const bestPrice = document.getElementById('best-price');
    const newBestPrice = bestPrice.innerText;
    const totalCost = document.getElementById('total-price');
    const newTotalCost =  parseInt(newBestPrice) + parseInt(newMemoryCost) + parseInt(newStorageCost) + parseInt(newDeliveryCharge);
    totalCost.innerText = newTotalCost;

    //update bottom total cost
    document.getElementById('bottom-total').innerText = newTotalCost;
}


document.getElementById('8gb-memory-btn').addEventListener('click', function() {
    updateCost('8gb-memory-btn','memory-cost');
});

document.getElementById('16gb-memory-btn').addEventListener('click', function() {
    updateCost('16gb-memory-btn','memory-cost');
});

document.getElementById('256gb-storage-btn').addEventListener('click', function() {
    updateCost('256gb-storage-btn','storage-cost');
});

document.getElementById('500gb-storage-btn').addEventListener('click', function() {
    updateCost('500gb-storage-btn','storage-cost');
});

document.getElementById('1tb-storage-btn').addEventListener('click', function() {
    updateCost('1tb-storage-btn','storage-cost');
});

document.getElementById('free-delivery-btn').addEventListener('click', function() {
    updateCost('free-delivery-btn','delivery-charge');
});

document.getElementById('paid-delivery-btn').addEventListener('click', function() {
    updateCost('paid-delivery-btn','delivery-charge');
});

document.getElementById('apply-btn').addEventListener('click', function() {
    const promoCode = document.getElementById('code-input');
    const newPromoCode = promoCode.value;
    
    if(newPromoCode == 'stevekaku') {
        // update total cost
        const totalCost = document.getElementById('total-price');
        const newTotalCost = totalCost.innerText;
        const discountedCost = (newTotalCost / 100) * 20;
        totalCost.innerText = parseInt(newTotalCost) - parseInt(discountedCost);

        //update bottom total cost
        document.getElementById('bottom-total').innerText = parseInt(newTotalCost) - parseInt(discountedCost);
        
        //clear promocode field
        promoCode.value = ''; 
    }
});