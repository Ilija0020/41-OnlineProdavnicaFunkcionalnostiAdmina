class Artikal {
  constructor(naziv, cena, opis) {
    this.naziv = naziv;
    this.cena = cena;
    this.opis = opis;
  }
}

let artikli = [];

function initializeProduct() {
  artikli = [
    new Artikal(
      "Monitor",
      165,
      "Visokokvalitetan monitor za sve vaše potrebe."
    ),
    new Artikal("TV", 650, "Najnoviji model sa vrhunskim karakteristikama."),
    new Artikal("Mis", 20, "Ergonomski mis za sve vaše potrebe."),
  ];
  createProductRows();
  handleFormSubmission();
}

function createProductRows() {
  let table = document.querySelector("#artikliTabela-body");
  table.innerHTML = "";
  for (let i = 0; i < artikli.length; i++) {
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    let naziv = document.createElement("td");
    let cena = document.createElement("td");

    id.textContent = i + 1;
    naziv.textContent = artikli[i].naziv;
    cena.textContent = artikli[i].cena;
    tr.appendChild(id);
    tr.appendChild(naziv);
    tr.appendChild(cena);

    tr.addEventListener("click", function () {
      displayProductDetails(artikli[i]);
    });

    table.appendChild(tr);
  }
}

document.addEventListener("DOMContentLoaded", initializeProduct);

function displayProductDetails(artikal) {
  let detalji = document.querySelector("#detaljiArtikla");
  detalji.innerHTML = `
      <p>Naziv: ${artikal.naziv}</p>
      <p>Cena: ${artikal.cena}</p>
      <p>Opis: ${artikal.opis}</p> `;

  detalji.style.display = "block";
}

function handleFormSubmission() {
  let submitBtn = document.querySelector("#submitBtn");
  submitBtn.addEventListener("click", function () {
    const forma = document.querySelector("#forma");
    const formData = new FormData(forma);

    const naziv = formData.get("naziv");
    const cena = formData.get("cena");
    const opis = formData.get("opis");

    const noviArtikal = new Artikal(naziv, cena, opis);
    artikli.push(noviArtikal);

    createProductRows();

    forma.reset();
  });
}
