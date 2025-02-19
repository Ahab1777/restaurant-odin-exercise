export default function menu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const h2 = document.createElement('h2');
    h2.textContent = "Menu";

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    
    // Create list of menu items
    const foodItems = document.createElement('ul');
    foodItems.classList.add('food-items');

    const beverageItems = document.createElement('ul');
    beverageItems.classList.add('beverage-items');

    // Create wrappers for food and beverage items
    const foodWrapper = document.createElement('div');
    foodWrapper.classList.add('items-wrapper');
    const foodHeader = document.createElement('h3');
    foodHeader.textContent = "Potato Dishes";
    foodWrapper.appendChild(foodHeader);
    foodWrapper.appendChild(foodItems);

    const beverageWrapper = document.createElement('div');
    beverageWrapper.classList.add('items-wrapper');
    const beverageHeader = document.createElement('h3');
    beverageHeader.textContent = "Beverages";
    beverageWrapper.appendChild(beverageHeader);
    beverageWrapper.appendChild(beverageItems);

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

    // Append wrappers to menu container
    menuContainer.appendChild(h2);
    menuContainer.appendChild(foodWrapper);
    menuContainer.appendChild(beverageWrapper);

    // Append menu container to content
    content.appendChild(menuContainer);
}