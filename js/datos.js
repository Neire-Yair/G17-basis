export const categorias = ["laptops", "smartphones", "tablets", "audio"];
export const productos = [
    { id: 1, nombre: "Macbook Pro 14", precio: 1999.99, categoria: "laptops", stock: 5, destacado: true, 
        envio : {zona : "Lima"}, dias : 1},
    { id: 2, nombre: "iPhone 15 Pro", precio: 1299.99, categoria: "smartphones", stock: 10, destacado: true,
        envio: {zona : "Lima", dias : 1}
     },
    { id: 3, nombre: "iPad Pro", precio: 1099.99, categoria: "tablets", stock: 0, destacado: false,
        envio : {zona : "Resta del Perú", dias :4}
     },
    { id: 4, nombre: "Airpods Max", precio: 249.99, categoria: "audio", stock: 15, destacado: true,
        envio : {zona : "Lima", dias : 1}
     },
    { id: 5, nombre: "Macbook Air 13", precio: 1299.99, categoria: "laptops", stock: 4, destacado: false,
        envio : {zona : "Resta del Perú", dias :4}
     },
    { id: 6, nombre: "iPhone 15", precio: 999.99, categoria: "smartphones", stock: 0, destacado: false,
        envio : {zona : "Internacional", dias : 10}
     },
    { id: 7, nombre: "Apple Watch Series 9", precio: 399.99, categoria: "smartwatches", stock: 8, destacado: false,
        envio : {zona : "Internacional", dias : 10},
     }
];

export const contarPorCategoria = (items) => 
    items.reduce((cuenta, {categoria}) => ({...cuenta, [categoria] : (cuenta[categoria] ?? 0) + 1}),{});