document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.getElementById("toggleSwitch");
    const prices = document.querySelectorAll(".price");

    const annualPrices = [19.99, 24.99, 39.99];
    const monthlyPrices = [199.99, 249.99, 399.99];

    function updatePrices(isMonthly) {
        prices.forEach((price, index) => {
            const amount = isMonthly ? monthlyPrices[index] : annualPrices[index];
            price.innerHTML = `<span>$</span>${amount}`;
        });
    }
    updatePrices(false);

    toggleSwitch.addEventListener("change", function() {
        updatePrices(toggleSwitch.checked);
    });
});
