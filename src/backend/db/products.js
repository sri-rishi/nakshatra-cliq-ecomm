import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    brandName: "Nikon",
    categoryName: ["Mirrorless", "DSLR"],
    imageSrc: "https://img.tatacliq.com/images/i6/437Wx649H/MP000000006499071_437Wx649H_20200210121319.jpeg",
    inStock: true,
    fastDelivery: true,
    newArrival: true,
    commingSoon: false,
    interestCategory: ["Wedding"],
    price: {
        original: 105995,
        discounted: 103875,
        discount: 1
    },
    ratings: 4.7,
    description: "Nikon Z50 (Z DX 16-50mm f/3.5-6.3&;50-250mm f/4.5-6.3 VR) 20.9 MP DX-format Mirrorless Camera (Black)",	
},
{
    _id: uuid(),
    brandName: "Canon",
    categoryName: ["DSLR"],
    imageSrc: "https://img.tatacliq.com/images/i6/437Wx649H/MP000000006499071_437Wx649H_20200210121319.jpeg",
    inStock: true,
    fastDelivery: true,
    newArrival: false,
    commingSoon: false,
        interestCategory: ["Wildlife"],
    price: {
        original: 59995,
        discounted: 58110,
        discount: 3
        },
    ratings: 4.4,
    description: "Canon EOS 200D II (EF-S 18-55mm f4-5.6 IS STM) DSLR Camera (Black)",	
},
{
    _id: uuid(),
    brandName: "Fujifilm",
    categoryName: ["Mirrorless", "DSLR"],
    imageSrc: "https://img.tatacliq.com/images/i6/437Wx649H/MP000000006499071_437Wx649H_20200210121319.jpeg",
    inStock: true,
    fastDelivery: false,
    newArrival: false,
    commingSoon: true,
    interestCategory: ["Wedding"],
    price: {
        original: 64210,
        discounted: 66999,
        discount: 4
    },
    ratings: 4.3,
    description: "Fujifilm X-T200 (XC 15-45mm F3.5-5.6 OIS PZ Lens) 24.2MP Mirrorless Digital Camera (Champagne Gold)",	
},
{
    _id: uuid(),
    brandName: "Sony",
    categoryName: ["Mirrorless", "DSLR"],
    imageSrc: "https://img.tatacliq.com/images/i6/437Wx649H/MP000000006499071_437Wx649H_20200210121319.jpeg",
    inStock: false,
    fastDelivery: false,
    newArrival: true,
    commingSoon: false,
    interestCategory: ["Travel"],
    price: {
        original: 321990,
        discounted: 310990,
        discount: 3
        },
    ratings: 4.3,
    description: "SONY Alpha ILCE-7RM4 Alpha ILCE-7RM4 Full-Frame 61.0MP Mirrorless Digital SLR Camera Body DSLR Camera Body only  (Black)",	
},
{
    _id: uuid(),
        brandName: "Nikon",
    categoryName:  ["DSLR"],
    imageSrc: "https://img.tatacliq.com/images/i6/437Wx649H/MP000000006499071_437Wx649H_20200210121319.jpeg",
    inStock: false,
    fastDelivery: false,
    newArrival: true,
    commingSoon: false,
    interestCategory: ["Wildlife"],
    price: {
        original: 271950,
        discounted: 264196,
        discount: 2
    },
    ratings: 4.4,
    description: "NIKON D850 DSLR Camera 24-120 mm VR Lens  (Black)",	
},
{
    _id: uuid(),
    brandName: "Sony",
    categoryName:  ["Compact"],
    imageSrc: "https://img.tatacliq.com/images/i6/437Wx649H/MP000000006499071_437Wx649H_20200210121319.jpeg",
    inStock: false,
    fastDelivery: false,
    newArrival: false,
    commingSoon: false,
    interestCategory: ["Travel"],
    price: {
        original: 98578,
        discounted: 96607,
        discount: 2
    },
    ratings: 4.6,
    description: "Sony RX100 VII Premium Compact Camera with 1.0-type stacked CMOS sensor (DSCRX100M7)",	
},
{
    _id: uuid(),
    brandName: "Fujifilm",
    categoryName:  ["Compact"],
    imageSrc: "https://img.tatacliq.com/images/i6/437Wx649H/MP000000006499071_437Wx649H_20200210121319.jpeg",
    inStock: true,
    fastDelivery: true,
    newArrival: false,
    commingSoon: false,
    interestCategory: ["Instant"],
    price: {
        original: 5999,
        discounted: 5750,
        discount: 4
    },
    ratings: 3,
    description: "Fujifilm Instax Mini 11 Instant Camera (Sky Blue)",	
},
{
    _id: uuid(),
    brandName: "Canon",
    categoryName:  ["Compact", "DSLR"],
    imageSrc: "https://img.tatacliq.com/images/i6/437Wx649H/MP000000006499071_437Wx649H_20200210121319.jpeg",
    inStock: true,
    fastDelivery: true,
    newArrival: false,
    commingSoon: false,
    interestCategory: ["Wildlife", "Travel"],
    price: {
        original: 58084,
        discounted: 55761,
        discount: 4
        },
    ratings: 3.5,
    description: "Canon PowerShot SX740 Digital Camera w/40x Optical Zoom and 3 Inch Tilt LCD - 4K V_ideo (Black)",	
},
{
    _id: uuid(),
    brandName: "Sony",
    categoryName:  ["Compact", "DSLR", "Bridge"],
    imageSrc: "https://img.tatacliq.com/images/i6/437Wx649H/MP000000006499071_437Wx649H_20200210121319.jpeg",
    inStock: false,
    fastDelivery: false,
    newArrival: false,
    commingSoon: true,
    interestCategory: ["Wildlife", "Travel"],
    price: {
        original: 122300,
        discounted: 114962,
        discount: 6
        },
    ratings: 3.5,
    description: "SONY RX10 III with F2.4-4 large-aperture 24-600mm F2.4-4 optical 25x zoom lens and 1.0-type stacked CMOS sensor "	
},
{
    _id: uuid(),
    brandName: "Canon",
    categoryName:  ["Compact", "DSLR", "Bridge"],
    imageSrc: "https://img.tatacliq.com/images/i6/437Wx649H/MP000000006499071_437Wx649H_20200210121319.jpeg",
    inStock: false,
    fastDelivery: false,
    newArrival: false,
    commingSoon: false,
    interestCategory: ["Wildlife", "Travel"],
    price: {
        original: 45195,
        discounted: 41367,
        discount: 8
    },
    ratings: 3.8,
    description: "Canon PowerShot SX70 HS  (20.3 MP, 65x Optical Zoom, 4x Digital Zoom, Black)",	
},
{
    _id: uuid(),
    brandName: "Fujifilm",
    categoryName:  ["Compact"],
    imageSrc: "https://img.tatacliq.com/images/i6/437Wx649H/MP000000006499071_437Wx649H_20200210121319.jpeg",
    inStock: false,
    fastDelivery: false,
    newArrival: false,
    commingSoon: true,
    interestCategory: ["Wildlife", "Travel", "Instant"],
    price: {
        original: 18399,
        discounted: 14999,
        discount: 18
    },
    ratings: 2.5,
    description: "Fujifilm Instax Square SQ20 Instant Camera (Beige)",	
},
];
