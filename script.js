"use strict";
const $ = (id) => document.getElementById(id);
const PAGE_SIZE = 12;
const state = {
  region: "all",
  brand: "all",
  body: "all",
  search: "",
  sort: "featured",
  savedOnly: false,
  limit: PAGE_SIZE,
};
const HEART =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg>';
const BODY_ICON =
  '<svg class="body-icon" viewBox="0 0 24 18" aria-hidden="true"><path d="m2 10 2-1 3-5h9l4 5 2 1v5h-3m-13 0H2v-5m6 5h8M6 9h12M9 4l-1 5m7-5 1 5"/><circle cx="6.5" cy="14" r="2"/><circle cx="17.5" cy="14" r="2"/></svg>';
const carById = new Map(CARS.map((car) => [car.id, car]));
const normalise = (text) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
const escapeHTML = (text) =>
  String(text).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
let saved = new Set();
try {
  const value = JSON.parse(localStorage.getItem("car-catalogue-saved") || "[]");
  if (Array.isArray(value))
    saved = new Set(value.filter((id) => carById.has(id)));
} catch {
  /* Browsing also works without local storage. */
}
let storageAvailable = true;
let activeCar = null;
let activeAudio = null;
let photoIndex = 0;
let toastTimeout;
let modalOpener;
const featuredIds = [
  "ford-mustang",
  "porsche-911",
  "toyota-supra",
  "bmw-m4",
  "chevrolet-corvette",
  "nissan-gt-r",
  "ferrari-roma",
  "land-rover-defender",
  "tesla-model-3",
  "mazda-mx-5",
  "lamborghini-revuelto",
  "volvo-ex30",
];
const featuredOrder = new Map(featuredIds.map((id, i) => [id, i]));
const featuredCars = [...CARS].sort(
  (a, b) =>
    (featuredOrder.get(a.id) ?? 1000) - (featuredOrder.get(b.id) ?? 1000),
);

function toast(message) {
  $("toast").textContent = message;
  $("toast").classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => $("toast").classList.remove("show"), 2400);
}
function updateSavedCount() {
  $("saved-count").textContent = saved.size;
  $("saved-toggle").setAttribute("aria-pressed", state.savedOnly);
}
function toggleSaved(id) {
  const car = carById.get(id);
  if (saved.has(id)) saved.delete(id);
  else saved.add(id);
  try {
    localStorage.setItem("car-catalogue-saved", JSON.stringify([...saved]));
  } catch {
    storageAvailable = false;
  }
  updateSavedCount();
  document.querySelectorAll(".save-car").forEach((button) => {
    const isSaved = saved.has(button.dataset.id);
    button.setAttribute("aria-pressed", isSaved);
    button.setAttribute(
      "aria-label",
      `${isSaved ? "Unsave" : "Save"} ${carById.get(button.dataset.id).brand} ${carById.get(button.dataset.id).name}`,
    );
  });
  if (activeCar?.id === id) updateModalSave();
  if (state.savedOnly) render();
  toast(
    `${car.brand} ${car.name} ${saved.has(id) ? "saved" : "removed"}${storageAvailable ? "" : " · for this visit"}`,
  );
}
function populateBrands() {
  const brands = [
    ...new Set(
      CARS.filter(
        (car) => state.region === "all" || car.region === state.region,
      ).map((car) => car.brand),
    ),
  ].sort((a, b) => a.localeCompare(b));
  if (!brands.includes(state.brand)) state.brand = "all";
  $("brand-filter").replaceChildren(
    new Option("All brands", "all"),
    ...brands.map((brand) => new Option(brand, brand)),
  );
  $("brand-filter").value = state.brand;
}
function matches() {
  const words = normalise(state.search.trim()).split(/\s+/).filter(Boolean);
  const cars = featuredCars.filter((car) => {
    const haystack = normalise(
      `${car.brand} ${car.name} ${car.region} ${car.body}`,
    );
    return (
      (state.region === "all" || car.region === state.region) &&
      (state.brand === "all" || car.brand === state.brand) &&
      (state.body === "all" || car.body === state.body) &&
      (!state.savedOnly || saved.has(car.id)) &&
      words.every((word) => haystack.includes(word))
    );
  });
  if (state.sort === "az")
    cars.sort((a, b) =>
      `${a.brand} ${a.name}`.localeCompare(`${b.brand} ${b.name}`),
    );
  if (state.sort === "za")
    cars.sort((a, b) =>
      `${b.brand} ${b.name}`.localeCompare(`${a.brand} ${a.name}`),
    );
  if (state.sort === "model") cars.sort((a, b) => a.name.localeCompare(b.name));
  return cars;
}
function card(car) {
  const article = document.createElement("article");
  article.className = "car-card";
  const title = `${car.brand} ${car.name}`;
  article.innerHTML = `<button class="save-car" data-id="${car.id}" aria-label="${saved.has(car.id) ? "Unsave" : "Save"} ${escapeHTML(title)}" aria-pressed="${saved.has(car.id)}">${HEART}</button><button class="card-open" data-id="${car.id}" aria-label="View ${escapeHTML(title)} details"><div class="car-image${car.credit.url ? " photo" : ""}"><span class="card-region">${car.region.toUpperCase()}</span><img src="${car.image}" alt="${escapeHTML(title)}" loading="lazy" decoding="async">${car.sound ? '<span class="sound-badge">♫ ENGINE RECORDING</span>' : ""}</div><div class="car-info"><p class="card-brand">${escapeHTML(car.brand)}</p><h3>${escapeHTML(car.name)}</h3><div class="card-bottom"><span>${BODY_ICON}${car.body}</span><span class="card-detail">Explore model <span aria-hidden="true">↗</span></span></div></div></button>`;
  article
    .querySelector(".save-car")
    .addEventListener("click", () => toggleSaved(car.id));
  article
    .querySelector(".card-open")
    .addEventListener("click", (event) => openModal(car, event.currentTarget));
  article
    .querySelector("img")
    .addEventListener("error", (event) =>
      event.target.parentElement.classList.add("image-unavailable"),
    );
  return article;
}
function render(append = false) {
  const cars = matches();
  const visible = cars.slice(0, state.limit);
  const grid = $("cars-container");
  const start = append ? grid.children.length : 0;
  if (!append) grid.replaceChildren();
  const fragment = document.createDocumentFragment();
  visible.slice(start).forEach((car) => fragment.append(card(car)));
  grid.append(fragment);
  $("results-count").innerHTML =
    `<strong>${cars.length}</strong> ${state.savedOnly ? "saved " : ""}${cars.length === 1 ? "model" : "models"}${state.region === "all" ? " from around the world" : ` from ${state.region}`}`;
  $("view-label").textContent = state.savedOnly
    ? "Your personal collection"
    : "A closer look starts here";
  $("catalogue-title").textContent = state.savedOnly
    ? "Your favourites. All here."
    : "Find your kind of car.";
  $("empty-state").hidden = cars.length > 0;
  $("empty-state").querySelector("h3").textContent =
    state.savedOnly && !saved.size
      ? "Your collection starts with a heart."
      : "No cars found. Keep exploring.";
  $("empty-state").querySelector("p").textContent =
    state.savedOnly && !saved.size
      ? "Tap the heart on any car to save it here."
      : "Try another model, brand or body style.";
  $("progress-text").textContent =
    `You’ve explored ${visible.length} of ${cars.length} models`;
  $("progress-fill").style.width =
    `${cars.length ? (visible.length / cars.length) * 100 : 0}%`;
  $("load-more").hidden = visible.length >= cars.length;
  $("progress-text").parentElement.hidden = !cars.length;
  $("reset-filters").hidden =
    state.region === "all" &&
    state.brand === "all" &&
    state.body === "all" &&
    !state.search &&
    !state.savedOnly;
  document.querySelectorAll(".region-tab").forEach((button) => {
    const active = button.dataset.region === state.region;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active);
  });
  updateSavedCount();
}
function reset() {
  Object.assign(state, {
    region: "all",
    brand: "all",
    body: "all",
    search: "",
    sort: "featured",
    savedOnly: false,
    limit: PAGE_SIZE,
  });
  $("search").value = "";
  $("body-filter").value = "all";
  $("sort").value = "featured";
  populateBrands();
  render();
}
function updateModalSave() {
  $("modal-save").textContent = saved.has(activeCar.id)
    ? "♥ Saved to your collection"
    : "♡ Save to your collection";
  $("modal-save").setAttribute("aria-pressed", saved.has(activeCar.id));
}
function carPhotos(car) {
  return car.id === "chevrolet-blazer"
    ? [car.image, "images/cars/blazer-front.png", "images/cars/blazer-back.png"]
    : car.id === "ford-mustang"
      ? [car.image, "images/cars/mustang1.png"]
      : [car.image];
}
function showPhoto() {
  const photos = carPhotos(activeCar);
  $("modal-image").src = photos[photoIndex];
  $("modal-image").alt =
    `${activeCar.brand} ${activeCar.name}${photos.length > 1 ? ` — photo ${photoIndex + 1}` : ""}`;
  $("photo-count").textContent = `${photoIndex + 1} / ${photos.length}`;
}
function stopAudio() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }
  $("play-sound").innerHTML =
    'Play engine sound <span aria-hidden="true">♫</span>';
  $("play-sound").setAttribute("aria-pressed", "false");
}
function safeLink(url) {
  try {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol) ? parsed.href : "";
  } catch {
    return "";
  }
}
function openModal(car, opener) {
  stopAudio();
  activeCar = car;
  photoIndex = 0;
  modalOpener = opener;
  $("modal-brand").textContent = car.brand;
  $("modal-name").textContent = car.name;
  const description = document.querySelector(".modal-description");
  description.replaceChildren(
    document.createTextNode(
      `Explore the ${car.brand} ${car.name} model family, its history and the details that make it distinctive.`,
    ),
  );
  if (car.originalExample) {
    const example = document.createElement("span");
    example.className = "original-specs";
    const heading = document.createElement("strong");
    heading.textContent = "From the original collection";
    example.append(heading);
    const title = document.createElement("span");
    title.textContent = car.originalExample.name;
    example.append(title);
    const details = document.createElement("span");
    details.textContent = `${car.originalExample.power} · ${car.originalExample.body} · ${car.originalExample.price}`;
    example.append(details);
    const note = document.createElement("small");
    note.textContent =
      "Original example values, retained for reference. Year and market unspecified; prices are not current quotes.";
    example.append(note);
    description.append(example);
  }
  $("modal-tags").replaceChildren(
    ...[car.body, car.region, ...(car.sound ? ["Engine recording"] : [])].map(
      (text) => {
        const span = document.createElement("span");
        span.textContent = text;
        return span;
      },
    ),
  );
  $("model-source").href = car.source;
  $("play-sound").hidden = !car.sound;
  $("audio-status").textContent = "";
  const gallery = carPhotos(car).length > 1;
  $("photo-prev").hidden = !gallery;
  $("photo-next").hidden = !gallery;
  $("photo-count").hidden = !gallery;
  showPhoto();
  updateModalSave();
  const credit = $("photo-credit");
  credit.replaceChildren();
  if (car.credit.url) {
    credit.append(
      "Photo: " +
        (car.credit.artist || "Wikimedia Commons contributor") +
        " · ",
    );
    const link = document.createElement("a");
    link.href = safeLink(car.credit.url);
    link.textContent = "Image & attribution";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    credit.append(link);
    if (car.credit.license) {
      credit.append(" · ");
      const license = document.createElement("a");
      license.textContent = car.credit.license;
      license.href = safeLink(car.credit.licenseUrl || car.credit.url);
      license.target = "_blank";
      license.rel = "noopener noreferrer";
      credit.append(license);
    }
  } else
    credit.textContent = "Photo from the original Car Catalogue collection.";
  $("car-modal").showModal();
  $("car-modal").scrollTop = 0;
  document.body.style.overflow = "hidden";
}
$("close-modal").addEventListener("click", () => $("car-modal").close());
$("car-modal").addEventListener("click", (event) => {
  if (event.target === $("car-modal")) {
    const rect = $("car-modal").getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      $("car-modal").close();
  }
});
$("car-modal").addEventListener("close", () => {
  stopAudio();
  document.body.style.overflow = "";
  activeCar = null;
  if (modalOpener?.isConnected) modalOpener.focus();
  else $("saved-toggle").focus();
});
$("modal-save").addEventListener("click", () => {
  if (activeCar) toggleSaved(activeCar.id);
});
$("photo-prev").addEventListener("click", () => {
  photoIndex =
    (photoIndex - 1 + carPhotos(activeCar).length) %
    carPhotos(activeCar).length;
  showPhoto();
});
$("photo-next").addEventListener("click", () => {
  photoIndex = (photoIndex + 1) % carPhotos(activeCar).length;
  showPhoto();
});
$("play-sound").addEventListener("click", async () => {
  if (!activeCar?.sound) return;
  if (activeAudio) {
    stopAudio();
    $("audio-status").textContent = "Playback stopped.";
    return;
  }
  const audio = new Audio(activeCar.sound);
  activeAudio = audio;
  const carId = activeCar.id;
  audio.addEventListener("ended", () => {
    if (activeAudio === audio) {
      stopAudio();
      $("audio-status").textContent = "";
    }
  });
  try {
    await audio.play();
    if (activeAudio === audio && activeCar?.id === carId) {
      $("play-sound").innerHTML =
        'Stop engine sound <span aria-hidden="true">■</span>';
      $("play-sound").setAttribute("aria-pressed", "true");
      $("audio-status").textContent =
        "Playing a recording from the original collection.";
    }
  } catch {
    if (activeAudio === audio) {
      stopAudio();
      $("audio-status").textContent =
        "The recording could not play. Please try again.";
    }
  }
});
document.querySelectorAll(".region-tab").forEach((button) =>
  button.addEventListener("click", () => {
    state.region = button.dataset.region;
    state.limit = PAGE_SIZE;
    populateBrands();
    render();
  }),
);
$("search").addEventListener("input", (event) => {
  state.search = event.target.value;
  state.limit = PAGE_SIZE;
  render();
});
for (const [id, key] of [
  ["brand-filter", "brand"],
  ["body-filter", "body"],
  ["sort", "sort"],
])
  $(id).addEventListener("change", (event) => {
    state[key] = event.target.value;
    state.limit = PAGE_SIZE;
    render();
  });
$("reset-filters").addEventListener("click", reset);
$("empty-reset").addEventListener("click", reset);
$("saved-toggle").addEventListener("click", () => {
  state.savedOnly = !state.savedOnly;
  state.region = "all";
  state.brand = "all";
  state.body = "all";
  state.search = "";
  state.limit = PAGE_SIZE;
  $("body-filter").value = "all";
  $("search").value = "";
  populateBrands();
  render();
  $("catalogue").scrollIntoView({
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
});
$("load-more").addEventListener("click", () => {
  const previous = $("cars-container").children.length;
  state.limit += PAGE_SIZE;
  render(true);
  $("cars-container")
    .children[previous]?.querySelector(".card-open")
    .focus({ preventScroll: true });
});
$("spotlight-link").addEventListener("click", (event) => {
  event.preventDefault();
  openModal(carById.get("porsche-911"), event.currentTarget);
});
populateBrands();
$("body-filter").append(
  ...[...new Set(CARS.map((car) => car.body))]
    .sort()
    .map((body) => new Option(body, body)),
);
$("model-count").textContent = CARS.length;
$("brand-count").textContent = new Set(CARS.map((car) => car.brand)).size;
render();
