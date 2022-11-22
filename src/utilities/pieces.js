const pieces = [

    {
        id: 1,
        title: 'Equinoccios',
        series: 1,
        technique: 'Mixta',
        measures: '50cm x 40cm',
        year: 2022,
        image: 'https://res.cloudinary.com/dna8yz36g/image/upload/v1660684210/obras-yuyi/DSC_0015_dubkj5-min_bl2mx1.jpg'
    },

    {
        id: 2,
        title: 'Cruz del Sur',
        series: 1,
        technique: 'Mixta',
        measures: '40cm x 50cm',
        year: 2022,
        image: 'https://res.cloudinary.com/dna8yz36g/image/upload/v1660684210/obras-yuyi/DSC_0019_ec79v0-min_dllatm.jpg'
    },

    {
        id: 3,
        title: 'Chaska (Estrella)',
        series: 1,
        technique: 'Mixta',
        measures: '50cm x 40cm',
        year: 2022,
        image: 'https://res.cloudinary.com/dna8yz36g/image/upload/v1660684210/obras-yuyi/DSC_0017_ioobqu-min_twgru4.jpg'
    },

    {
        id: 4,
        title: 'Invierno',
        series: 2,
        technique: 'Tinta',
        measures: '55cm x 45cm',
        year: 2022,
        image: 'https://res.cloudinary.com/dna8yz36g/image/upload/v1660684210/obras-yuyi/DSC_0021_unukcg-min_e43lrs.jpg'
    },

    {
        id: 5,
        title: 'La Guardia',
        series: null,
        technique: 'Acrílico',
        measures: '30cm x 40cm',
        year: 2016,
        image: 'https://res.cloudinary.com/dna8yz36g/image/upload/v1660684210/obras-yuyi/DSC_0024_qsewwy-min_kz0ath.jpg'
    },

    {
        id: 6,
        title: 'Sinfonía en Flor',
        series: null,
        technique: 'Óleo',
        measures: '40cm x 55cm',
        year: 2018,
        image: 'https://res.cloudinary.com/dna8yz36g/image/upload/v1660684210/obras-yuyi/DSC_0023_eq8xqp_ybpnkz-min_p7hab6.jpg'
    },

    {
        id: 7,
        title: 'Devenir',
        description: 'Esta obra participó de la Bienal de Vitrofusión de Costa Rica y fue donada al Museo de la UNSa',
        series: null,
        technique: 'Escultura',
        materials: 'Tronco - madera - alambre - plancha de silicona - hilo de yaguar - harina de arroz',
        measures: '30cm x 15cm x 15cm',
        year: 2022,
        image: 'https://res.cloudinary.com/dna8yz36g/image/upload/v1664915709/obras-yuyi/ezgif-4-73b1cffc38_adxxn4.gif'
    },

    {
        id: 8,
        title: 'Infancia - Ilustración de poesía de Adriana Martell',
        series: null,
        technique: 'Mixta',
        measures: '85cm x 65cm',
        year: 2022,
        image: 'https://res.cloudinary.com/dna8yz36g/image/upload/v1664995392/obras-yuyi/DSC_0015_dxumxe.jpg'
    },

    {
        id: 9,
        title: 'Claveles',
        series: 3,
        technique: 'Acrílico sobre cartón - Con marco de madera y vidrio',
        measures: '40cm x 30cm ',
        year: 2021,
        image: 'https://res.cloudinary.com/dna8yz36g/image/upload/v1664995394/obras-yuyi/DSC_0028_limwfb.jpg'
    },

    {
        id: 11,
        title: 'Ambigüedades l',
        series: null,
        technique: 'Tinta - Enmarcada con vidrio',
        measures: '30cm x 25cm',
        year: 2017,
        image: 'https://res.cloudinary.com/dna8yz36g/image/upload/v1664995396/obras-yuyi/DSC_0034_sdaoza.jpg'
    },

    {
        id: 13,
        title: 'Glisinas',
        series: 3,
        technique: 'Acrílico sobre cartón - Con marco de madera y vidrio',
        measures: '40cm x 30cm',
        year: 2021,
        image: 'https://res.cloudinary.com/dna8yz36g/image/upload/v1666209625/obras-yuyi/DSC_0038-min_opr3s2.jpg'
    },

    {
        id: 14,
        title: 'Sin tiempo',
        series: 4,
        technique: 'Pastel',
        measures: '45cm x 35cm',
        year: 2020,
        image: 'https://res.cloudinary.com/dna8yz36g/image/upload/v1666369615/obras-yuyi/WhatsApp_Image_2022-10-21_at_13.00.36_zdkoc0.jpg'
    },

    {
        id: 15,
        title: 'Tiempo anunciado',
        series: 4,
        technique: 'Pastel',
        measures: '45cm x 35cm',
        year: 2020,
        image: 'https://res.cloudinary.com/dna8yz36g/image/upload/v1666369615/obras-yuyi/DSC_0043-min_hho8u7.jpg'
    },

    {
        id: 16,
        title: 'Tiempo de espera',
        series: 4,
        technique: 'Pastel',
        measures: '45cm x 35cm',
        year: 2020,
        image: 'https://res.cloudinary.com/dna8yz36g/image/upload/v1666369613/obras-yuyi/DSC_0044-min_jgci4h.jpg'
    },

    {
        id: 17,
        title: 'Tiempo dorado',
        series: 4,
        technique: 'Pastel',
        measures: '45cm x 35cm',
        year: 2020,
        image: 'https://res.cloudinary.com/dna8yz36g/image/upload/v1666369607/obras-yuyi/DSC_0045-min_h8s1lt.jpg'
    },

    {
        id: 18,
        title: 'Tiempo ganado',
        series: 4,
        technique: 'Pastel',
        measures: '45cm x 35cm',
        year: 2020,
        image: 'https://res.cloudinary.com/dna8yz36g/image/upload/v1666369610/obras-yuyi/DSC_0041-min_jexue1.jpg'
    },
    {
        id: 19,
        title: 'Tiempo lejano',
        series: 4,
        technique: 'Pastel',
        measures: '45cm x 35cm',
        year: 2020,
        image: 'https://res.cloudinary.com/dna8yz36g/image/upload/v1666369611/obras-yuyi/DSC_0042-min_i0jjjs.jpg'
    }

]

export default pieces