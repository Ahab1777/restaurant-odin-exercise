export default function menu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const h2 = document.createElement('h2');
    h2.textContent = "Menu";

    // Create list of menu items
    const foodItems = document.createElement('ul');
    foodItems.innerText = 'Foods';
    foodItems.classList.add('food-items');

    const beverageItems = document.createElement('ul');
    beverageItems.innerText = 'Beverages';
    beverageItems.classList.add('beverage-items');

    // Beverages
    const beverages = [
        "Ale",
        "Lager",
        "Stout",
        "Porter",
        "Pilsner",
        "Wheat Beer",
        "Saison",
        "Mead",
        "Honey Mead",
        "Fruit Mead"
    ];

    // Foods
    const foods = [
        "Baked Potato",
        "Mashed Potato",
        "Roasted Potato",
        "Potato Salad",
        "Potato Soup"
    ];

    // Append beverages to menu
    beverages.forEach(beverage => {
        const li = document.createElement('li');
        li.textContent = beverage;
        beverageItems.appendChild(li);
    });

    // Append foods to menu
    foods.forEach(food => {
        const li = document.createElement('li');
        li.textContent = food;
        foodItems.appendChild(li);
    });

    content.appendChild(h2);
    content.appendChild(foodItems)
    content.appendChild(beverageItems);
}