const pizzas = [{
    id: 1,
    nombre: "Muzza",
    precio: 600,
    ingredientes: ["muzzarela", "salsa", "oregano"]
  },
  {
    id: 2,
    nombre: "fuga",
    precio: 680,
    ingredientes: ["cebolla", "muzzarrella"]
  },
  {
    id: 3,
    nombre: "napo",
    precio: 700,
    ingredientes: ["Tomate", "salsa", "muzzarella"]
  },
  {
    id: 4,
    nombre: "anchoas",
    precio: 800,
    ingredientes: ["anchoas", "salsa", "muzzarella"]
  },
  {
    id: 5,
    nombre: "roquefort",
    precio: 570,
    ingredientes: ["muzzarela", "salsa", "roquefort"]
  },
  {
    id: 6,
    nombre: "jamon y morron",
    precio: 500,
    ingredientes: ["jamon", "salsa", "morron", "muzarella"]
  }
];
pizzas.forEach((pizza) => {
  if (pizza.id % 2 != 0) {
    console.log(`pizzas impares :${pizza.id}`)
  }
  if (pizza.precio < 600) {
    console.log(`menores a 600 :${pizza.precio}`)
  }
console.log(pizza.nombre);
console.log(pizza.precio);
console.log("--- --- --- ---");
console.log(`Nombre: ${pizza.nombre}, Precio: ${pizza.precio}`)
})