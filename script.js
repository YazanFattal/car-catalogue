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
        image: "images/cars/f150.png",
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

    Dodge: [
      {
      name: "Charger Scat Pack",
      image: "images/cars/charger.png",
      power: "485 HP",
      size: "Muscle Sedan",
      price: "€62,000"
      }
    ]
  },

  Europe: {

    Porsche: [
      {
      name: "Porsche 911 Carrera S",
      image: "images/cars/porsche911.png",
      power: "450 HP",
      size: "Sports Coupe",
      price: "€145,000"
      }
    ],
    BMW: [
      {
        name: "BMW M4",
        image: "images/cars/BMWm4.png",
        power: "503 HP",
        size: "Coupe",
        price: "€105,000"
      },
      {
        name: "BMW X5",
        image: "images/cars/BMWx5.png",
        power: "375 HP",
        size: "SUV",
        price: "€90,000"
      }
    ],
    Mercedes: [
      {
        name: "AMG GT",
        image: "images/cars/AMGgt.png",
        power: "577 HP",
        size: "Sports Car",
        price: "€160,000"
      },
      {
        name: "C-Class",
        image: "images/cars/MercedesC.png",
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
        image: "images/cars/supra.png",
        power: "382 HP",
        size: "Sports Car",
        price: "€70,000"
      },
      {
        name: "Corolla",
        image: "images/cars/corolla.png",
        power: "169 HP",
        size: "Sedan",
        price: "€32,000"
      }
    ],
    Nissan: [
      {
        name: "GT-R",
        image: "images/cars/GTR.png",
        power: "565 HP",
        size: "Sports Car",
        price: "€120,000"
      },
      {
        name: "Qashqai",
        image: "images/cars/qashqai.png",
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
  Dodge: "images/logos/dodge.png",
  Porsche: "images/logos/porsche.png",
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

  carsContainer.innerHTML = "";
  carsTitle.textContent = `${brand} Cars`;

  carData[region][brand].forEach(car => {
    const carCard = document.createElement("div");
    carCard.className = "car-card";

    const image = car.image;

    carCard.innerHTML = `
      <div class="car-image">
      <img src="${image}" alt="${car.name}">
      </div>

      <div class="car-info">
        <h3>${car.name}</h3>
        <p><strong>Power:</strong> ${car.power}</p>
        <p><strong>Size:</strong> ${car.size}</p>
        <p><strong>Price:</strong> ${car.price}</p>
      </div>
    `;
    const img = carCard.querySelector("img");

    img.onload = () => {
    img.classList.add("loaded");
      };

    carCard.addEventListener("click", () => {
      let sound = null;

      if (car.name === "Mustang") {
        sound = document.getElementById("mustangSound");
      }

      if (car.name === "Blazer") {
        sound = document.getElementById("blazerSound");
      }

      if (sound) {
        sound.currentTime = 0;
        sound.play();
      }
    });

    carsContainer.appendChild(carCard);
  });
}

