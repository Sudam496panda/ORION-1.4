import Grocery from "./Components/Grocery";
import Mobiles from "./Components/Mobiles";
import Fashion from "./Components/Fashion";
import Electronics from "./Components/Electronics";
// import HomeFurniture from "./component/HomeFurniture";
// import Appliances from "./Components/Appliances";
// import FlightBookings from "./component/FlightBookings";
// import BeautyToys from "./Components/Beauty, Toys & More";
// import TwoWheelers from "./Components/Two Wheelers";
 

export const allRoutes = [
    {
        path:"/",
        Component:<Grocery />
    },
    {
        path:"/mobiles",
        Component:<Mobiles />
    },
    {
        path:"/fashion",
        Component:<Fashion />
    },
    {
       path:"/electronics",
       Component:<Electronics />
    },
    // {
    //     path:"Homefurniture",
    //     Component:<HomeFurniture />
    // },
    // {
    //     path:"appliances",
    //     Component:<Appliances />
    // },
    // {
    //     path:"flightbookings",
    //     Component:<FlightBookings />
    // },
    // {
    //     path:"beautytoys",
    //     Component:<BeautyToys />
    // },
    // {
    //     path:"twowheelers",
    //     Component:<TwoWheelers />
    // }
]
export default allRoutes;