//PRODUCTOS
//----------------------------------------------------------------------------
const sneakers = [
  {
    id: 0,
    brand: "Nike Original",
    model: "Air Max 1",
    price: 120,
    img: "./assets/nike_air_max_1.png",
    color: "Blanco"
  },
  {
    id: 1,
    brand: "New Balance",
    model: "NB 9060",
    price: 80,
    img: "./assets/nb_9060.png",
    color: "Azul"
  },
  {
    id: 2,
    brand: "Nike Original",
    model: "Nike Revolution",
    price: 90,
    img: "./assets/nike_revolution.png",
    color: "Azul"
  },
  {
    id: 3,
    brand: "Adidas Original",
    model: "Forum Buckle",
    price: 100,
    img: "./assets/addidas_forum_buckle.png",
    color: "Azul"
  },
  {
    id: 4,
    brand: "Adidas Original",
    model: "Campus",
    price: 120,
    img: "./assets/adidas_campus.png",
    color: "Verde"
  },
  {
    id: 5,
    brand: "New Balance",
    model: "NB 327",
    price: 120,
    img: "./assets/nb_327.png",
    color: "Otros"
  },
  {
    id: 6,
    brand: "Nike Original",
    model: "Dunk Low",
    price: 100,
    img: "./assets/nike_dunk_low.png",
    color: "Azul"
  },
  {
    id: 7,
    brand: "Adidas Original",
    model: "Gazelle",
    price: 90,
    img: "./assets/adidas_gazelle.png",
    color: "Rosa"
  },
  {
    id: 8,
    brand: "Nike Original",
    model: "Air Max SC",
    price: 150,
    img: "./assets/nike_air_max_sc.png",
    color: "Marrón"
  },
  {
    id: 9,
    brand: "Adidas Original",
    model: "Handball Spezial",
    price: 120,
    img: "./assets/adidas_handball_spezial.png",
    color: "Negro"
  },
  {
    id: 10,
    brand: "Nike Original",
    model: "Air Force",
    price: 130,
    img: "./assets/nike_air_force.png",
    color: "Naranja"
  },
  {
    id: 11,
    brand: "New Balance",
    model: "NB 9060",
    price: 100,
    img: "./assets/nb_9060_2.png",
    color: "Otros"
  },
  {
    id: 12,
    brand: "New Balance",
    model: "NB 480",
    price: 150,
    img: "./assets/nb_480.png",
    color: "Naranja"
  },
  {
    id: 13,
    brand: "Nike Original",
    model: "Full Force Low",
    price: 70,
    img: "./assets/nike_full_force_low.png",
    color: "Blanco"
  },
  {
    id: 14,
    brand: "Nike Original",
    model: "Air Max SC",
    price: 160,
    img: "./assets/nike_air_max_sc_2.png",
    color: "Gris"
  },
  {
    id: 15,
    brand: "Adidas Original",
    model: "Handball Spezial",
    price: 140,
    img: "./assets/adidas_handball_spezial_2.png",
    color: "Marrón"
  }
];



//FILTRO
//----------------------------------------------------------------------------
const BRANDS = [];

let BRAND = "";
let COLOR = "";

console.log(Math.random()*15);

const filter = () =>  {
  const filtered = [];

  for (const product of sneakers){
    if(BRAND === product.brand && COLOR === product.color) {
      filtered.push(product);
    }
  }

  printSneakers(filtered);
  hideText();



  const random = [];

  if (filtered.length === 0) {
    let num1;
    let num2;
    let num3;

    do {
      num1 = Math.floor(Math.random()*16);
      num2 = Math.floor(Math.random()*16);
      num3 = Math.floor(Math.random()*16);
    }
    while ((num1 === num2) || (num1 === num3) || (num2 === num3))
    random.push(sneakers[num1]);
    random.push(sneakers[num2]);
    random.push(sneakers[num3]);

    printSneakers(random);
    showText();
  }

}

const fillBrands = (products) => {
  BRANDS.splice(0);
  BRANDS.push("Por Defecto");
  for (const product of products) {
    if (!BRANDS.includes(product.brand)) {
      BRANDS.push(product.brand);
    }
  }
}

fillBrands(sneakers);

const createSelectBrand = () => {
    const divFilters = document.querySelector("#filters");

    const selectModel = document.createElement("select");
    selectModel.id = "brands";

    for (const brand of BRANDS) {
      const option = document.createElement("option")

      option.value = brand;
      option.textContent = brand;

      selectModel.appendChild(option);
    }

    divFilters .appendChild(selectModel);

    selectModel.addEventListener("change", (event) => {
      BRAND = event.target.value;
      filter();
    })
}

createSelectBrand();



//FILTRO DE COLORES
//----------------------------------------------------------------------------
const COLORS = [];

const fillColors = (products) => {
  COLORS.splice(0);
  COLORS.push("Por Defecto");
  for (const product of products) {
    if (!COLORS.includes(product.color)) {
      COLORS.push(product.color);
    }
  }
}

fillColors(sneakers);

const createSelectColor = () => {
    const divFilters = document.querySelector("#filters");

    const selectModel = document.createElement("select");
        selectModel.id = "colors"

    for (const color of COLORS) {
      const option = document.createElement("option")

      option.value = color;
      option.textContent = color;

      selectModel.appendChild(option);
    }

    divFilters .appendChild(selectModel);

    selectModel.addEventListener("change", (event) => {
      COLOR = event.target.value;
      filter();
    })

}

createSelectColor();

const resetButton = () => {
  const selectBrand = document.querySelector("#brands");
  const selectColor = document.querySelector("#colors");
  const divFilters = document.querySelector("#filters");
  const filterResetButton = document.createElement("button");

  filterResetButton.textContent = "Restablecer filtros";
  filterResetButton.id = "filter-reset";
  divFilters.appendChild(filterResetButton);

  filterResetButton.addEventListener("click", function() {
    printSneakers(sneakers);
    resetSelect(selectBrand);
    resetSelect(selectColor);
    hideText();
  })
}
resetButton();

function resetSelect(selectElement) {
  selectElement.selectedIndex = 0;
}



//GENERADOR DE TARJETAS DE PRODUCTOS
//----------------------------------------------------------------------------
const printSneakers = (products) => {

    const divProducts = document.querySelector("#products");
    divProducts.innerHTML = "";

    const noResult = document.createElement("h3");
    noResult.textContent = "No se han encontrado productos con esas características, pero te ofrecemos tres alternativas que quizás podrían interesarte";
    noResult.id = "no-results";
    divProducts.appendChild(noResult);

    for (const product of products) {
        const divProduct = document.createElement("div");
        const divImg = document.createElement("div");
        const divProductInfo = document.createElement("div");
        const img = document.createElement("img");
        const brand = document.createElement("h3");
        const model = document.createElement("p");
        const price = document.createElement("p");
        const button = document.createElement("button");

        divProduct.className = "flex-container";
        divImg.className = "img-container";
        img.src = product.img;
        divProductInfo.className = "product-info";
        brand.textContent = product.brand;
        brand.className = "brand";
        model.textContent = product.model;
        model.className = "model";
        price.textContent = `${product.price} €`;
        price.className = "price";
        button.textContent = "Comprar";
        button.className = "buy-button";

        divProducts.appendChild(divProduct);
        divProduct.appendChild(divImg);
        divImg.appendChild(img);
        divProduct.appendChild(divProductInfo);
        divProductInfo.appendChild(brand);
        divProductInfo.appendChild(model);
        divProductInfo.appendChild(price);
        divProduct.appendChild(button);
    }

}

const hideText = () => {
  document.getElementById('no-results').style.visibility = 'hidden'
}

const showText = () => {
  document.getElementById('no-results').style.visibility = 'visible'
  }

  
printSneakers(sneakers);
hideText();
