// src/data/productosBase.js
const productosBase = [
  // Yogurts
  {
    nombre: "Yogurt Fresa 1L",
    familia: "Yogurt",
    presentacion: "1L",
    sabor: "Fresa",
    lotes: [
      {
        lote: "YF2401",
        encargado: "Laura Gómez",
        fechaProduccion: "2025-09-28",
        fechaCaducidad: "2025-11-15",
        piezas: 320,
      },
      {
        lote: "YF2402",
        encargado: "Miguel Sánchez",
        fechaProduccion: "2025-10-12",
        fechaCaducidad: "2025-11-30",
        piezas: 180,
      },
    ],
  },
  {
    nombre: "Yogurt Mango 1L",
    familia: "Yogurt",
    presentacion: "1L",
    sabor: "Mango",
    lotes: [
      {
        lote: "YM2401",
        encargado: "Sara López",
        fechaProduccion: "2025-10-05",
        fechaCaducidad: "2025-11-22",
        piezas: 260,
      },
    ],
  },

  // Crema
  {
    nombre: "Crema Natural 500g",
    familia: "Cremas",
    presentacion: "500g",
    sabor: "Natural",
    lotes: [
      {
        lote: "CN2403",
        encargado: "José Pérez",
        fechaProduccion: "2025-09-20",
        fechaCaducidad: "2025-11-05",
        piezas: 410,
      },
      {
        lote: "CN2404",
        encargado: "Ana Ruiz",
        fechaProduccion: "2025-10-15",
        fechaCaducidad: "2025-12-02",
        piezas: 320,
      },
    ],
  },

  // Bebidas lácteas
  {
    nombre: "Bebida Láctea Café 250ml",
    familia: "Bebidas Lácteas",
    presentacion: "250ml",
    sabor: "Café",
    lotes: [
      {
        lote: "BC2501",
        encargado: "Ricardo Martínez",
        fechaProduccion: "2025-09-25",
        fechaCaducidad: "2025-11-10",
        piezas: 500,
      },
    ],
  },
  {
    nombre: "Bebida Láctea Chocolate 250ml",
    familia: "Bebidas Lácteas",
    presentacion: "250ml",
    sabor: "Chocolate",
    lotes: [
      {
        lote: "BCH2501",
        encargado: "Lucía Torres",
        fechaProduccion: "2025-10-01",
        fechaCaducidad: "2025-11-20",
        piezas: 420,
      },
    ],
  },

  // Lactobacilos
  {
    nombre: "Lactobacilos Natural 200ml",
    familia: "Lactobacilos",
    presentacion: "200ml",
    sabor: "Natural",
    lotes: [
      {
        lote: "LB2401",
        encargado: "Javier Díaz",
        fechaProduccion: "2025-09-30",
        fechaCaducidad: "2025-11-15",
        piezas: 600,
      },
    ],
  },

  // Licuados
  {
    nombre: "Licuado Fresa 500ml",
    familia: "Licuados",
    presentacion: "500ml",
    sabor: "Fresa",
    lotes: [
      {
        lote: "LF5001",
        encargado: "Marta Ruiz",
        fechaProduccion: "2025-09-22",
        fechaCaducidad: "2025-11-01",
        piezas: 250,
      },
    ],
  },

  // Yogurt Griego
  {
    nombre: "Yogurt Griego Vainilla 250g",
    familia: "Yogurt Griego",
    presentacion: "250g",
    sabor: "Vainilla",
    lotes: [
      {
        lote: "YG2501",
        encargado: "Diego Herrera",
        fechaProduccion: "2025-10-10",
        fechaCaducidad: "2025-11-25",
        piezas: 300,
      },
    ],
  },
];

export default productosBase;