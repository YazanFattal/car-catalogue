"use strict";
(() => {
  const $ = (id) => document.getElementById(id);
  const eras = EVOLUTION.eras;
  const cars = new Map(
    eras.flatMap((era) =>
      era.cars.map((car) => [car.id, { ...car, era: era.label }]),
    ),
  );
  let current = 0;
  let opener;
  const text = (tag, value, className) => {
    const el = document.createElement(tag);
    el.textContent = value;
    if (className) el.className = className;
    return el;
  };
  const link = (label, url) => {
    const el = text("a", label);
    el.href = url;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
    return el;
  };
  const yearLabel = (car) =>
    car.concept ? `${car.year} CONCEPT` : `${car.year}`;
  const image = (car) => {
    const el = document.createElement("img");
    el.src = car.image;
    el.alt = car.name;
    el.loading = "lazy";
    el.decoding = "async";
    return el;
  };

  function openCar(car, button) {
    opener = button;
    $("e-modal-image").src = car.image;
    $("e-modal-image").alt = car.name;
    $("e-modal-title").textContent = car.name;
    $("e-modal-year").textContent = car.concept
      ? `CONCEPT REVEALED ${car.year} · SHOWN IN THE 2030 OUTLOOK`
      : `${car.year} · ${car.era}`;
    $("e-modal-detail").textContent = car.detail;
    $("e-modal-source").href = car.source;
    $("e-modal-context").textContent = car.concept
      ? "A documented earlier concept, shown as an example of an idea. It is not a confirmed 2030 production model."
      : "The year marks this model or generation’s introduction. The reference photo may depict a later example of the same generation.";
    const credit = $("e-modal-credit");
    credit.replaceChildren();
    credit.append(
      `Photo: ${car.credit.artist} · `,
      link(car.credit.title.replaceAll("_", " "), car.credit.url),
      " · ",
      link(car.credit.license, car.credit.licenseUrl || car.credit.url),
    );
    $("e-car-modal").showModal();
    $("e-car-modal").scrollTop = 0;
    document.body.style.overflow = "hidden";
  }

  function carCard(car) {
    const article = document.createElement("article");
    article.className = "e-car-card";
    const button = document.createElement("button");
    button.className = "e-car-open";
    button.setAttribute("aria-label", `Explore ${car.name}, ${yearLabel(car)}`);
    const visual = document.createElement("span");
    visual.className = "e-car-photo";
    visual.append(image(car), text("span", yearLabel(car), "e-year-badge"));
    const info = document.createElement("span");
    info.className = "e-car-info";
    info.append(
      text("span", car.feature, "e-card-kicker"),
      text("strong", car.name, "e-card-name"),
      text("span", car.detail, "e-card-description"),
      text("span", "Explore the story ↗", "e-card-link"),
    );
    button.append(visual, info);
    button.addEventListener("click", () => openCar(cars.get(car.id), button));
    article.append(button);
    return article;
  }

  function activate(index, updateHash = true) {
    current = Math.max(0, Math.min(eras.length - 1, index));
    const era = eras[current];
    document.querySelectorAll("[role=tab]").forEach((tab, i) => {
      const selected = i === current;
      tab.setAttribute("aria-selected", selected);
      tab.tabIndex = selected ? 0 : -1;
    });
    $("era-panel").setAttribute("aria-labelledby", `tab-${era.id}`);
    $("era-panel").classList.toggle("is-future", !!era.future);
    $("era-number").replaceChildren(
      text("span", era.future ? "2030" : era.label.slice(2, 4)),
      ...(era.future ? [] : [text("small", "s")]),
    );
    $("era-range").textContent = era.range;
    $("era-status").textContent = era.future
      ? "FUTURE OUTLOOK"
      : "HISTORICAL OVERVIEW";
    for (const key of [
      "subtitle",
      "title",
      "summary",
      "design",
      "technology",
      "experience",
    ])
      $(`era-${key}`).textContent = era[key];
    $("era-tags").replaceChildren(...era.tags.map((tag) => text("span", tag)));
    $("era-cars-title").textContent = era.future
      ? "Earlier concepts. Possible directions."
      : "Cars that tell the story";
    $("era-cars-note").textContent = era.future
      ? "Actual concepts, with their original reveal years."
      : "Three perspectives on the decade.";
    $("era-cars").replaceChildren(...era.cars.map(carCard));
    $("era-prev").disabled = current === 0;
    $("era-next").disabled = current === eras.length - 1;
    $("era-position").textContent =
      `${String(current + 1).padStart(2, "0")} / 07 · ${era.future ? "2030 outlook" : era.label}`;
    if (updateHash && location.hash !== `#${era.id}`)
      history.pushState(null, "", `#${era.id}`);
  }

  document.querySelectorAll("[role=tab]").forEach((tab, index) => {
    tab.addEventListener("click", () => activate(index));
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % eras.length;
      else if (event.key === "ArrowLeft")
        next = (index - 1 + eras.length) % eras.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = eras.length - 1;
      else return;
      event.preventDefault();
      activate(next);
      document.querySelectorAll("[role=tab]")[next].focus();
    });
  });
  const fromHash = () => {
    const index = eras.findIndex((era) => `#${era.id}` === location.hash);
    if (index >= 0) activate(index, false);
  };
  addEventListener("popstate", fromHash);
  addEventListener("hashchange", fromHash);
  $("era-prev").addEventListener("click", () => activate(current - 1));
  $("era-next").addEventListener("click", () => activate(current + 1));
  $("e-modal-close").addEventListener("click", () => $("e-car-modal").close());
  $("e-car-modal").addEventListener("close", () => {
    document.body.style.overflow = "";
    if (opener?.isConnected) opener.focus();
  });
  $("e-car-modal").addEventListener("click", (event) => {
    const modal = $("e-car-modal");
    if (event.target !== modal) return;
    const r = modal.getBoundingClientRect();
    if (
      event.clientX < r.left ||
      event.clientX > r.right ||
      event.clientY < r.top ||
      event.clientY > r.bottom
    )
      modal.close();
  });

  const historyEras = eras.filter((era) => !era.future);
  for (const id of ["compare-from", "compare-to"])
    $(id).append(...historyEras.map((era) => new Option(era.label, era.id)));
  $("compare-from").value = "1970s";
  $("compare-to").value = "2020s";
  function compareCard(era) {
    const article = document.createElement("article");
    article.className = "e-compare-card";
    const visual = document.createElement("div");
    visual.className = "e-compare-photo";
    visual.append(
      image(era.cars[0]),
      text("span", era.label, "e-compare-year"),
    );
    const info = document.createElement("div");
    info.className = "e-compare-info";
    info.append(
      text("p", era.cars[0].name, "e-compare-model"),
      text("h3", era.title),
    );
    const list = document.createElement("dl");
    for (const [label, key] of [
      ["Design", "design"],
      ["Technology", "technology"],
      ["Experience", "experience"],
    ])
      list.append(text("dt", label), text("dd", era[key]));
    info.append(list);
    article.append(visual, info);
    return article;
  }
  function renderComparison() {
    const from = historyEras.find((era) => era.id === $("compare-from").value),
      to = historyEras.find((era) => era.id === $("compare-to").value);
    $("compare-cards").replaceChildren(compareCard(from), compareCard(to));
    $("compare-note").textContent =
      from.id === to.id
        ? "You are comparing the same decade. Choose another era to see the contrast."
        : `${from.label} compared with ${to.label}. These selected examples illustrate different ideas; technologies and design trends often overlap decades.`;
  }
  $("compare-from").addEventListener("change", renderComparison);
  $("compare-to").addEventListener("change", renderComparison);
  $("e-hero-image").src = cars.get("countach-lp400").image;
  activate(0, false);
  fromHash();
  renderComparison();
})();
