const bicicletas = [
  {
    nombre: "Bicicleta de Montaña",
    precio: "CLP 189.990",
    imagen: "https://via.placeholder.com/250x150.png?text=Montaña"
  },
  {
    nombre: "Bicicleta Urbana",
    precio: "CLP 125.990",
    imagen: "https://via.placeholder.com/250x150.png?text=Urbana"
  },
  {
    nombre: "Bicicleta de Carretera",
    precio: "CLP 1.799.990",
    imagen: "https://via.placeholder.com/250x150.png?text=Carretera"
  }
];

const catalogo = document.getElementById("catalogo");

bicicletas.forEach(bici => {
  const card = document.createElement("div");
  card.className = "bicicleta";
  card.innerHTML = `
    <img src="${bici.imagen}" alt="${bici.nombre}">
    <div class="info">
      <h3>${bici.nombre}</h3>
      <p><strong>Precio:</strong> ${bici.precio}</p>
    </div>
  `;
  catalogo.appendChild(card);
});
