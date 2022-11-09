import { nanoid } from "@reduxjs/toolkit";
// combo images
import comboImg1 from "../assets/dataImages/combo/1.png";
import comboImg2 from "../assets/dataImages/combo/2.png";
import comboImg3 from "../assets/dataImages/combo/3.png";
// pizza images
import pizzaImg1 from "../assets/dataImages/pizza/1.png";
import pizzaImg2 from "../assets/dataImages/pizza/2.png";
import pizzaImg3 from "../assets/dataImages/pizza/3.png";
import pizzaImg4 from "../assets/dataImages/pizza/4.png";
import pizzaImg5 from "../assets/dataImages/pizza/5.png";
import pizzaImg6 from "../assets/dataImages/pizza/6.png";
import pizzaImg7 from "../assets/dataImages/pizza/7.png";
import pizzaImg8 from "../assets/dataImages/pizza/8.png";
import pizzaImg9 from "../assets/dataImages/pizza/9.png";
import pizzaImg10 from "../assets/dataImages/pizza/10.png";
import pizzaImg11 from "../assets/dataImages/pizza/11.png";
import pizzaImg12 from "../assets/dataImages/pizza/12.png";
import pizzaImg13 from "../assets/dataImages/pizza/13.png";
import pizzaImg14 from "../assets/dataImages/pizza/14.png";
import pizzaImg15 from "../assets/dataImages/pizza/15.png";
// drink images
import drinkImg1 from "../assets/dataImages/drink/1.png";
import drinkImg2 from "../assets/dataImages/drink/2.png";
import drinkImg3 from "../assets/dataImages/drink/3.png";
import drinkImg4 from "../assets/dataImages/drink/4.png";
import drinkImg5 from "../assets/dataImages/drink/5.png";
import drinkImg6 from "../assets/dataImages/drink/6.png";
import drinkImg7 from "../assets/dataImages/drink/7.png";
import drinkImg8 from "../assets/dataImages/drink/8.png";
import drinkImg9 from "../assets/dataImages/drink/9.png";
import drinkImg10 from "../assets/dataImages/drink/10.png";
// salad images
import saladImg1 from "../assets/dataImages/salad/1.png";
import saladImg2 from "../assets/dataImages/salad/2.png";
// sauce images
import sauceImg1 from "../assets/dataImages/sauce/1.png";
import sauceImg2 from "../assets/dataImages/sauce/2.png";
import sauceImg3 from "../assets/dataImages/sauce/3.png";
// dessert image
import dessertImg1 from "../assets/dataImages/dessert/1.png";
import dessertImg2 from "../assets/dataImages/dessert/2.png";
import dessertImg3 from "../assets/dataImages/dessert/3.png";

const data = [
    {
        id: nanoid(),
        idPage: "combo-section",
        img: comboImg1,
        title: "5 ta oʻrtacha pitsa",
        desc: "Oʻzingizning sevimli pitsalaringizni tanlang va 17% gacha tejab qoling",
        category: "combo",
        price: 270000
    },
    {
        id: nanoid(),
        img: comboImg2,
        title: "5 ta katta pitsa",
        desc: "Beshta katta pitsa: oʻzingizning sevimli pitsalaringizni tanlang va 17% gacha tejab qoling",
        category: "combo",
        price: 330000
    },
    {
        id: nanoid(),
        img: comboImg3,
        title: "10 ta Katta Pitsa",
        desc: "Oʻnta katta pitsa 17% chegirma bilan. Sevimli pitsalaringizni tanlang va xursandchilikni katta va doʻstona jamoa bilan baham koʻring",
        category: "combo",
        price: 650000
    },
    {
        id: nanoid(),
        idPage: "pizza-section",
        img: pizzaImg1,
        title: "Donar Pitsa",
        desc: "Donar go‘shti va haqiqiy motsarella pishlog‘i solingan mazali va to‘yimli pitsa",
        category: "pizza",
        price: 60000
    },
    {
        id: nanoid(),
        img: pizzaImg2,
        title: "Salsa",
        desc: "Joʻja, salsa sousi, mayin motsarella pishlogʻi, xalapenyo, bulgʻor qalampiri va pomidorlar",
        category: "pizza",
        price: 50000
    },
    {
        id: nanoid(),
        img: pizzaImg3,
        title: "Gurme",
        desc: "Pizza sous, zaytun, pepperoni, qo'ziqorin, oregano",
        category: "pizza",
        price: 50000
    },
    {
        id: nanoid(),
        img: pizzaImg4,
        title: "Super Miks",
        desc: "«Super Miks» pitsasi 1 ta pitsada 4 xil sevimli pitsalaringiz birlashmasi!",
        category: "pizza",
        price: 80000
    },
    {
        id: nanoid(),
        img: pizzaImg5,
        title: "Chiken karri",
        desc: "Mol goʻshtili rulet va tovuq filesi motsarella pishlogʻi, ananas va Karri sousi bilan",
        category: "pizza",
        price: 50000
    },
    {
        id: nanoid(),
        img: pizzaImg6,
        title: "Pishloqli joʻja",
        desc: "Yumshoq tovuq filesi, motsarella pishlogʻi, pomidor va pishloqli sous",
        category: "pizza",
        price: 45000
    },
    {
        id: nanoid(),
        img: pizzaImg7,
        title: "Dabl pepperoni",
        desc: "Ikki hissa pepperoni motsarella pishlogʻi va tomat sousi bilan",
        category: "pizza",
        price: 54000
    },
    {
        id: nanoid(),
        img: pizzaImg8,
        title: "Yurak pizza",
        desc: "Yaxshi ko’rgan insoningizni g'ayrioddiy pitsa bilan hayratda qoldiring ❤️",
        category: "pizza",
        price: 79000
    },
    {
        id: nanoid(),
        img: pizzaImg9,
        title: "Joʻjacha Ranch",
        desc: "Yumshoq tovuq filesi, motsarella pishlogʻi va pomidor Ranch sousi bilan",
        category: "pizza",
        price: 45000
    },
    {
        id: nanoid(),
        img: pizzaImg10,
        title: "Halapeno",
        desc: "Kurka filesi, yumshoq mol goʻshti, piyoz, pomidor, 'Halapeno' achchiq qalampiri, motsarella pishlogʻi va barbekyu sous",
        category: "pizza",
        price: 50000
    },
    {
        id: nanoid(),
        img: pizzaImg11,
        title: "Pepperoni",
        desc: "Pepperoni, motsarella pishlogʻi va tomat sousi",
        category: "pizza",
        price: 45000
    },
    {
        id: nanoid(),
        img: pizzaImg12,
        title: "Meksikancha",
        desc: "Mol goʻshti, pepperoni kolbasasi, mayin motsarella pishlogʻi, xalapenyo, barbekyu sousi, bulgʻor qalampiri, piyoz va pomidorlar",
        category: "pizza",
        price: 50000
    },
    {
        id: nanoid(),
        img: pizzaImg13,
        title: "Margarita",
        desc: "Motsarella pishlogʻi, pomidor va oregano tomat sousi bilan",
        category: "pizza",
        price: 38000
    },
    {
        id: nanoid(),
        img: pizzaImg14,
        title: "Barbekyu tovuq",
        desc: "Tovuq filesi, piyoz, choʻziluvchan motsarella pishlogʻi barbekyu va tomat sousi bilan",
        category: "pizza",
        price: 45000
    },
    {
        id: nanoid(),
        img: pizzaImg15,
        title: "Alfredo",
        desc: "Alfredo sousi, ismaloq, motsarella pishlogʻi, yumshoq joʻja filesi, qoʻziqorin",
        category: "pizza",
        price: 38000
    },
    {
        id: nanoid(),
        idPage: "drink-section",
        img: drinkImg1,
        title: "Coca Cola 0,5L",
        category: "drink",
        price: 7000
    },
    {
        id: nanoid(),
        img: drinkImg1,
        title: "Coca Cola 1L",
        category: "drink",
        price: 10000
    },
    {
        id: nanoid(),
        img: drinkImg1,
        title: "Coca Cola 1.5L",
        category: "drink",
        price: 14000
    },
    {
        id: nanoid(),
        img: drinkImg2,
        title: "Fanta 0.5L",
        category: "drink",
        price: 7000
    },
    {
        id: nanoid(),
        img: drinkImg2,
        title: "Fanta 1L",
        category: "drink",
        price: 10000
    },
    {
        id: nanoid(),
        img: drinkImg2,
        title: "Fanta 1.5L",
        category: "drink",
        price: 14000
    },
    {
        id: nanoid(),
        img: drinkImg3,
        title: "Sprite 0.5L",
        category: "drink",
        price: 7000
    },
    {
        id: nanoid(),
        img: drinkImg3,
        title: "Sprite 1L",
        category: "drink",
        price: 10000
    },
    {
        id: nanoid(),
        img: drinkImg3,
        title: "Sprite 1.5L",
        category: "drink",
        price: 14000
    },
    {
        id: nanoid(),
        img: drinkImg4,
        title: "Orik sharbati",
        category: "drink",
        price: 13000
    },
    {
        id: nanoid(),
        img: drinkImg5,
        title: "O'rmon mevalari sharbati",
        category: "drink",
        price: 13000
    },
    {
        id: nanoid(),
        img: drinkImg6,
        title: "Ananas sharbati",
        category: "drink",
        price: 13000
    },
    {
        id: nanoid(),
        img: drinkImg7,
        title: "Olcha sharbati",
        category: "drink",
        price: 13000
    },
    {
        id: nanoid(),
        img: drinkImg8,
        title: "'Amerikano' qahvasi",
        category: "drink",
        price: 10000
    },
    {
        id: nanoid(),
        img: drinkImg9,
        title: "'Latte' qahvasi",
        category: "drink",
        price: 12000
    },
    {
        id: nanoid(),
        img: drinkImg10,
        title: "'Cappuccino' qahvasi",
        category: "drink",
        price: 12000
    },
    {
        id: nanoid(),
        idPage: "sauce-section",
        img: sauceImg1,
        title: "Firmenniy sous",
        category: "sauce",
        price: 3000
    },
    {
        id: nanoid(),
        img: sauceImg2,
        title: "Pishloqli sous",
        category: "sauce",
        price: 3000
    },
    {
        id: nanoid(),
        img: sauceImg3,
        title: "Barbekyu sousi",
        category: "sauce",
        price: 3000
    },
    {
        id: nanoid(),
        idPage: "dessert-section",
        img: dessertImg1,
        title: "Sinnamon Rollar 8 ta",
        category: "dessert",
        price: 10000
    },
    {
        id: nanoid(),
        img: dessertImg2,
        title: "Sinnamon Rollar 10 ta",
        category: "dessert",
        price: 20000
    },
    {
        id: nanoid(),
        img: dessertImg3,
        title: "Shokoladli Fondan",
        category: "dessert",
        price: 19000
    },
    {
        id: nanoid(),
        img: saladImg1,
        title: "'Grecheskiy' salat",
        category: "salad",
        price: 19000
    },
    {
        id: nanoid(),
        img: saladImg2,
        title: "'Sezar' salat",
        category: "salad",
        price: 19000
    },
    {
        id: nanoid(),
        img: saladImg2,
        title: "'Lazer' salat",
        category: "salad",
        price: 21000
    },
]

export default data;