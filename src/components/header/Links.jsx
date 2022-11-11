// icons
import { FaCoffee, FaPizzaSlice } from "react-icons/fa";
import { GiChocolateBar, GiFullPizza, GiSaucepan } from "react-icons/gi";

// Menu links
export const menuLinks = [
    {
        name: "kombo",
        link: "/#combo-section",
        icon: <GiFullPizza />,
    },
    {
        name: "pitsa",
        link: "/#pizza-section",
        icon: <FaPizzaSlice />,
    },
    {
        name: "ichimliklar",
        link: "/#drink-section",
        icon: <FaCoffee />,
    },
    {
        name: "souslar",
        link: "/#sauce-section",
        icon: <GiSaucepan />,
    },
    {
        name: "desertlar",
        link: "/#dessert-section",
        icon: <GiChocolateBar />,
    },
];