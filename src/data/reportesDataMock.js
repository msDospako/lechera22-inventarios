// ==== MOCK DE DATOS DE REPORTES MENSUALES ====

const reportesDataMock = {
    mes: "Octubre 2025",

    resumenGlobal: {
        produccionTotal: 124500,
        eficienciaPromedio: 93.4,
        pedidosTotales: 8920,
        cumplimientoEntregas: 97.2,
        valorInventario: 4285000,
    },

    produccion: [
        { fecha: "01/10/2025", producto: "Yogurt Fresa 1L", unidades: 4800, eficiencia: 92 },
        { fecha: "02/10/2025", producto: "Yogurt Durazno 1L", unidades: 5100, eficiencia: 95 },
        { fecha: "03/10/2025", producto: "Yogurt Natural 1L", unidades: 5200, eficiencia: 93 },
        { fecha: "04/10/2025", producto: "Bebida Láctea Café 500ml", unidades: 3800, eficiencia: 91 },
        { fecha: "05/10/2025", producto: "Bebida Láctea Chocolate 500ml", unidades: 4100, eficiencia: 92 },
        { fecha: "06/10/2025", producto: "Crema Natural 1kg", unidades: 2950, eficiencia: 90 },
        { fecha: "07/10/2025", producto: "Yogurt Griego 500g", unidades: 3300, eficiencia: 96 },
        { fecha: "08/10/2025", producto: "Licuado Mango 1L", unidades: 3700, eficiencia: 94 },
        { fecha: "09/10/2025", producto: "Yogurt Fresa 1L", unidades: 4950, eficiencia: 93 },
        { fecha: "10/10/2025", producto: "Yogurt Natural 1L", unidades: 5000, eficiencia: 94 },
        { fecha: "11/10/2025", producto: "Yogurt Durazno 1L", unidades: 5120, eficiencia: 92 },
        { fecha: "12/10/2025", producto: "Bebida Láctea Chocolate 500ml", unidades: 4000, eficiencia: 93 },
        { fecha: "13/10/2025", producto: "Licuado Fresa 1L", unidades: 3650, eficiencia: 91 },
        { fecha: "14/10/2025", producto: "Yogurt Griego 500g", unidades: 3400, eficiencia: 95 },
        { fecha: "15/10/2025", producto: "Crema Natural 1kg", unidades: 3000, eficiencia: 89 },
    ],

    distribucion: [
        { zona: "Norte", pedidos: 2800, entregas: 2720, cumplimiento: 97 },
        { zona: "Centro", pedidos: 3100, entregas: 3030, cumplimiento: 98 },
        { zona: "Sur", pedidos: 2200, entregas: 2130, cumplimiento: 97 },
        { zona: "Oeste", pedidos: 820, entregas: 790, cumplimiento: 96 },
    ],

    inventario: [
        { familia: "Yogurt", producto: "Yogurt Fresa 1L", piezas: 5200, estado: "OK" },
        { familia: "Yogurt", producto: "Yogurt Natural 1L", piezas: 4800, estado: "OK" },
        { familia: "Yogurt", producto: "Yogurt Durazno 1L", piezas: 3900, estado: "Próximo a caducar" },
        { familia: "Crema", producto: "Crema Natural 1kg", piezas: 1600, estado: "Bajo stock" },
        { familia: "Bebidas", producto: "Bebida Láctea Chocolate 500ml", piezas: 3400, estado: "OK" },
        { familia: "Bebidas", producto: "Bebida Láctea Café 500ml", piezas: 2700, estado: "OK" },
        { familia: "Griego", producto: "Yogurt Griego 500g", piezas: 2200, estado: "OK" },
        { familia: "Licuados", producto: "Licuado Mango 1L", piezas: 1800, estado: "OK" },
    ],

    tablaGeneral: Array.from({ length: 31 }, (_, i) => {
        const dia = i + 1;
        const produccion = 4000 + Math.floor(Math.random() * 2000);
        const eficiencia = 90 + Math.random() * 8;
        const pedidos = 250 + Math.floor(Math.random() * 100);
        const cumplimiento = 95 + Math.random() * 5;
        const valorInventario = 4200000 + Math.floor(Math.random() * 80000);

        return {
            fecha: `${dia.toString().padStart(2, "0")}/10/2025`,
            produccion,
            eficiencia: eficiencia.toFixed(1),
            pedidos,
            cumplimiento: cumplimiento.toFixed(1),
            valorInventario,
        };
    }),
};

export default reportesDataMock;