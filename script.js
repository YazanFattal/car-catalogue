const carData = {
  USA: {
    Ford: [
      {
        name: "Mustang",
        image: "images/cars/mustang.png",
        power: "480 HP",
        size: "Coupe",
        price: "€58,000"
      },
      {
        name: "F-150",
        image: "🛻",
        power: "400 HP",
        size: "Pickup Truck",
        price: "€65,000"
      }
    ],
    Chevrolet: [
    {
      name: "Blazer",
      image: "images/cars/blazer.png",
      power: "308 HP",
      size: "Mid-Size SUV",
      price: "€42,000"
    },
    {
      name: "Tahoe",
      image: "images/cars/tahoe.png",
      power: "355 HP",
      size: "Full-Size SUV",
      price: "€68,000"
    }
  ],

    Tesla: [
      {
        name: "Model 3",
        image: "🚗",
        power: "283 HP",
        size: "Sedan",
        price: "€42,000"
      },
      {
        name: "Model X",
        image: "🚙",
        power: "670 HP",
        size: "SUV",
        price: "€95,000"
      }
    ]
  },

  Europe: {
    BMW: [
      {
        name: "BMW M4",
        image: "🏎️",
        power: "503 HP",
        size: "Coupe",
        price: "€105,000"
      },
      {
        name: "BMW X5",
        image: "🚙",
        power: "375 HP",
        size: "SUV",
        price: "€90,000"
      }
    ],
    Mercedes: [
      {
        name: "AMG GT",
        image: "🏎️",
        power: "577 HP",
        size: "Sports Car",
        price: "€160,000"
      },
      {
        name: "C-Class",
        image: "🚗",
        power: "255 HP",
        size: "Sedan",
        price: "€55,000"
      }
    ]
  },

  Asia: {
    Toyota: [
      {
        name: "Supra",
        image: "🏎️",
        power: "382 HP",
        size: "Sports Car",
        price: "€70,000"
      },
      {
        name: "Corolla",
        image: "🚗",
        power: "169 HP",
        size: "Sedan",
        price: "€32,000"
      }
    ],
    Nissan: [
      {
        name: "GT-R",
        image: "🏎️",
        power: "565 HP",
        size: "Sports Car",
        price: "€120,000"
      },
      {
        name: "Qashqai",
        image: "🚙",
        power: "158 HP",
        size: "SUV",
        price: "€38,000"
      }
    ]
  }
};

const brandLogos = {
  Ford: "images/logos/ford.png",
  Chevrolet: "images/logos/chevrolet.png",
  Tesla: "images/logos/tesla.png",
  BMW: "images/logos/bmw.png",
  Mercedes: "images/logos/mercedes.png",
  Toyota: "images/logos/toyota.png",
  Nissan: "images/logos/nissan.png"
};

function showBrands(region) {
  const brandsContainer = document.getElementById("brands-container");
  const carsContainer = document.getElementById("cars-container");
  const sectionTitle = document.getElementById("section-title");
  const carsTitle = document.getElementById("cars-title");

  brandsContainer.innerHTML = "";
  carsContainer.innerHTML = "";
  carsTitle.textContent = "";
  sectionTitle.textContent = `${region} Car Brands`;

  const brands = Object.keys(carData[region]);

  brands.forEach(brand => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => showCars(region, brand);

    card.innerHTML = `
      <img class="brand-logo"
     src="${brandLogos[brand]}"
     alt="${brand}">
      <h3>${brand}</h3>
    `;

    brandsContainer.appendChild(card);
  });
}

function showCars(region, brand) {
  const carsContainer = document.getElementById("cars-container");
  const carsTitle = document.getElementById("cars-title");
  const sound = document.getElementById("mustangSound");

  carsContainer.innerHTML = "";
  carsTitle.textContent = `${brand} Cars`;

  carData[region][brand].forEach(car => {
    const carCard = document.createElement("div");
    carCard.className = "car-card";

    carCard.innerHTML = `
  <div class="car-image">
    <img src="${car.image}" alt="${car.name}">
    <div class="sound-indicator">🔊 Hear sound</div>
  </div>

  <div class="car-info">
    <h3>${car.name}</h3>
    <p><strong>Power:</strong> ${car.power}</p>
    <p><strong>Size:</strong> ${car.size}</p>
    <p><strong>Price:</strong> ${car.price}</p>
  </div>
`;

    carCard.addEventListener("click", () => {
  if (car.name === "Mustang") {
    const sound = document.getElementById("mustangSound");
    sound.currentTime = 0;
    sound.play();
  }

  if (car.name === "Blazer") {
    const sound = document.getElementById("blazerSound");
    sound.currentTime = 0;
    sound.play();
  }
});

    carsContainer.appendChild(carCard);
  });
}