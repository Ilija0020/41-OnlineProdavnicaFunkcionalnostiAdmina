class Artikal {
  constructor(naziv, cena, opis) {
    this.naziv = naziv;
    this.cena = cena;
    this.opis = opis;
  }
}

let artikli = [];

function initializeArtikal() {
  artikli = [
    new Artikal(
      "Monitor",
      165,
      "Visokokvalitetan monitor za sve vaše potrebe."
    ),
    new Artikal("TV", 650, "Najnoviji model sa vrhunskim karakteristikama."),
    new Artikal("Mis", 20, "Ergonomski mis za sve vaše potrebe."),
  ];
  createArtikalRows();
}

function createArtikalRows() {
  let table = document.querySelector("#artikliTabela-body");
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
      prikaziDetaljaArtikla(artikli[i]);
    });

    table.appendChild(tr);
  }
}

document.addEventListener("DOMContentLoaded", initializeArtikal);

function prikaziDetaljaArtikla(artikal) {
  let detalji = document.querySelector("#detaljiArtikla");
  detalji.innerHTML = "Naziv: " + artikal.naziv + "<br>" +
    "Cena: " + artikal.cena + "<br>" +
    "Opis: " + artikal.opis;
  
  detalji.style.display = "block";
}
