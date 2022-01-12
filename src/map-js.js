let promise = Notification.requestPermission();

let map = L.map("map").setView([53.430127, 14.564802], 18);
// L.tileLayer.provider("OpenStreetMap.DE").addTo(map);
L.tileLayer.provider("Esri.WorldImagery").addTo(map);

let containerWidth = parseInt(
  getComputedStyle(document.getElementById("rasterMap")).width
);
let containerHeight = parseInt(
  getComputedStyle(document.getElementById("rasterMap")).height
);

let n_col = 4;
let n_row = 4;

const checkIfWin = () => {
  const destinationDivs = document.querySelectorAll(".container");
  const draggables = document.querySelectorAll(".draggable");

  let counter = 0;

  destinationDivs.forEach((div) => {
    const child = div.firstElementChild;
    if (child !== null) {
      if (div.id == child.id) {
        counter++;
      }
    }
  });
  if (counter == n_col * n_row) {
    new Notification("Puzzle ułożone");
  }
};

const containers = document.querySelectorAll(".container");
containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    let dragging = document.querySelector(".dragging");
    container.appendChild(dragging);
  });
});

document.getElementById("saveButton").addEventListener("click", function () {
  leafletImage(map, (err, canvas) => {
    // Usuwanie dzieci
    let container = document.getElementById("rasterMap");
    let child = container.lastElementChild;
    while (child) {
      container.removeChild(child);
      child = container.lastElementChild;
    }

    let idOfCanvas = 0;
    for (let i = 0; i < n_row; i++) {
      for (let j = 0; j < n_col; j++) {
        let canv = document.createElement("canvas");
        ctx = canv.getContext("2d");
        canv.height = parseInt(containerHeight / n_row);
        canv.width = parseInt(containerWidth / n_col);
        canv.style.margin = 0;
        canv.id = idOfCanvas;
        canv.setAttribute("draggable", true);
        canv.classList.add("draggable");

        canv.addEventListener("dragstart", () => {
          canv.classList.add("dragging");
        });

        canv.addEventListener("dragend", () => {
          canv.classList.remove("dragging");
          checkIfWin();
        });

        let uH = containerHeight / n_row; //Unit
        let uW = containerWidth / n_col; //Unit

        let sx = j * uW;
        let sy = i * uH;
        let sW = uW;
        let sH = uH;
        ctx.drawImage(canvas, sx, sy, sW, sH, 0, 0, sW, sH);

        document.getElementById("rasterMap").appendChild(canv);
        idOfCanvas++;
      }
    }
  });
});

document
  .getElementById("getLocation")
  .addEventListener("click", function (event) {
    if (!navigator.geolocation) {
      console.log("No geolocation.");
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        map.setView([lat, lon]);
      },
      (positionError) => {
        console.error(positionError);
      }
    );
  });

document
  .getElementById("shuffleButton")
  .addEventListener("click", function (event) {
    let container = document.getElementById("rasterMap");
    let canvasArray = [];

    // Zapisywanie aktualnych dzieci
    container.childNodes.forEach((child) => {
      canvasArray.push(child);
    });

    // Usuwanie dzieci
    let child = container.lastElementChild;
    while (child) {
      container.removeChild(child);
      child = container.lastElementChild;
    }

    // Shufflowanie dzieci
    canvasArray = canvasArray.sort(() => Math.random() - 0.5);

    // Dodawanie dzieci z powrotem
    canvasArray.forEach((canvas) => {
      container.appendChild(canvas);
    });
  });
