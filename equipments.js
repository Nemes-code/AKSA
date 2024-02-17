let products = {
  data: [
    {
      productName: "Electric Fences",
      category: "security",
      image: "assets/equipments/electric.jpg",
    },
    {
      productName: "Clear View Fence",
      category: "security",
      image: "assets/equipments/fence.jpg",
    },
    {
      productName: "Motorized Gate Systems",
      category: "security",
      image: "assets/equipments/motorized gates.jpg",
    },
    {
      productName: "Thermal Cameras",
      category: "security",
      image: "assets/equipments/thermo.jpg",
    },
    {
      productName: "CCTV Cameras",
      category: "security",
      image: "assets/equipments/cctv.jpg",
    },
    {
      productName: "Metal Detectors",
      category: "security",
      image: "assets/equipments/metal detector.jpg",
    },
    {
      productName: "Walk-through Detector",
      category: "security",
      image: "assets/equipments/walk through.jpg",
    },
    {
      productName: "X-Ray Detector",
      category: "security",
      image: "assets/equipments/x ray.jpg",
    },
    {
      productName: "Number Plate Recognition",
      category: "security",
      image: "assets/equipments/plate number.jpg",
    },
    {
      productName: "Beam Sensor",
      category: "security",
      image: "assets/equipments/beam sensor.jpg",
    },
    {
      productName: "Under Vehicle Mirrors",
      category: "security",
      image: "assets/equipments/undervehicle.jpg",
    },
    {
      productName: "Access Control System",
      category: "access",
      image: "assets/equipments/access.jpg",
    },
    {
      productName: "Card Printers",
      category: "access",
      image: "assets/equipments/card printer.jpg",
    },
    {
      productName: "Fire Suppression System",
      category: "fire",
      image: "assets/equipments/supression.jpg",
    },
    {
      productName: "Fire Extinguisher Servicing",
      category: "fire",
      image: "assets/equipments/refilling.jpg",
    },
    {
      productName: "Fire Extinguisher",
      category: "fire",
      image: "assets/equipments/fire.jpg",
    },
    {
      productName: "Lightning Arrester",
      category: "fire",
      image: "assets/equipments/Lightning arrest.jpg",
    },
    {
      productName: "PPE Gear",
      category: "personal",
      image: "assets/equipments/ppe.jpg",
    },
    {
      productName: "Handcuffs",
      category: "personal",
      image: "assets/equipments/hand cuffs.jpg",
    },
    {
      productName: "AICO Blows",
      category: "personal",
      image: "assets/equipments/aico blows.jpg",
    },
    {
      productName: "Ballistic Vests",
      category: "personal",
      image: "assets/equipments/balistic vest.jpg",
    },
    {
      productName: "Tonfa PR24 Batons",
      category: "personal",
      image: "assets/equipments/tonfa.jpg",
    },
    {
      productName: "Belt Baton Holders",
      category: "personal",
      image: "assets/equipments/batton holder.jpg",
    },
    {
      productName: "Webb Beilts",
      category: "personal",
      image: "assets/equipments/web beilts.jpg",
    },
    {
      productName: "Lanyards",
      category: "personal",
      image: "assets/equipments/lanyards.jpg",
    },
    {
      productName: "Barets",
      category: "personal",
      image: "assets/equipments/barets.jpg",
    },
    {
      productName: "Whistles",
      category: "personal",
      image: "assets/equipments/whistles.jpg",
    },
    {
      productName: "Non Lethal Teasers",
      category: "personal",
      image: "assets/equipments/leather.jpg",
    },
    {
      productName: "Pepper Sprays",
      category: "personal",
      image: "assets/equipments/pepper.jpg",
    },
    {
      productName: "Barricades",
      category: "personal",
      image: "assets/equipments/bbarr header.jpg",
    },
    {
      productName: "Anti-riot Kit",
      category: "personal",
      image: "assets/equipments/anti riot.jpg",
    },
    {
      productName: "Non Lethal Teasers",
      category: "personal",
      image: "assets/equipments/leather.jpg",
    },
    {
      productName: "Remote Security Kit",
      category: "others",
      image: "assets/equipments/remote.jpg",
    },
    {
      productName: "Intruder Alarms",
      category: "others",
      image: "assets/equipments/inducer alarm.jpg",
    },
    {
      productName: "Secustic Cable Glues",
      category: "others",
      image: "assets/equipments/cable glue.jpg",
    },
    {
      productName: "4-core Cables",
      category: "others",
      image: "assets/equipments/4 core-1.jpg",
    },
    {
      productName: "8-core",
      category: "others",
      image: "assets/equipments/8 core.jpg",
    },
    {
      productName: "6-core",
      category: "others",
      image: "assets/equipments/6 core.jpg",
    },
    {
      productName: "Stand Alone Alarms",
      category: "others",
      image: "assets/equipments/stand alone ps.jpg",
    },
    {
      productName: "Power Supply",
      category: "others",
      image: "assets/equipments/power supply.jpg",
    },
    {
      productName: "Power Backups",
      category: "others",
      image: "assets/equipments/power backup.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
