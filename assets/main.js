// Toggle Menu Mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !expanded);
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
  });
}

// Carros de exemplo para Inventory
const cars = [
  { name: 'Lamborghini Aventador', price: 'R$ 7.500/dia', img: 'assets/car-sample.jpg' },
  { name: 'Ferrari F8 Tributo', price: 'R$ 5.000/dia', img: 'assets/car-sample.jpg' },
  { name: 'Porsche 911 Turbo', price: 'R$ 4.000/dia', img: 'assets/car-sample.jpg' }
];

const inventoryGrid = document.getElementById('inventory-grid');
if (inventoryGrid) {
  cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
      <img src="${car.img}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>${car.price}</p>
      <a class="btn btn-primary" href="vehicle.html">Ver detalhes</a>
    `;
    inventoryGrid.appendChild(card);
  });
}
