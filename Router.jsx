import React from "react";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import NavBar from "./NavBar";
import CarService from "./CarService";
import BikeService from "./BikeService";
import Product from "./Product/Product";
import SingleProduct from "./Product/SingleProduct";
import AllProduct2 from "./Product/Product2/AllProduct2";
import Card2 from "./Product/Product2/Card2";
import SingleProduct2 from "./Product/Product2/SingleProduct2";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Service">
            <Route index path="" element={<Service />} />
            <Route path="car" element={<CarService />} />
            <Route path="bike" element={<BikeService />} />
          </Route>
          <Route path="/Contact" Component={Contact} />
          <Route path="/Product" Component={AllProduct2} />
          <Route path="/Product/:id" Component={SingleProduct2} />
          <Route path="*" Component={PageNotFound} />
          {/* <Route path="/product/:id" Component={SingleProduct} /> */}
          {/* <Route path="/product" Component={AllProduct2}/> */}

        </Routes>

        {/* <Home />
        <Service /> */}
        {/* <Contact /> */}
      </BrowserRouter>
    </>
  );
}

// export default function Router() {
//   return (
//     <>
//       <BrowserRouter>
//         <ul>
//           <li>
//             <Link to={"/Home"}>Home</Link>
//           </li>
//           <li>
//             <Link to={"/Service"}>Service</Link>
//           </li>
//           <li>
//             <Link to={"/Contact"}> Contact Us</Link>
//           </li>
//         </ul>

//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/Service" element={<Service />} />
//           <Route path="/Contact" element={<Contact />} />
//           <Route path="*" Component={PageNotFound} />

//         </Routes>

//         {/* <Home />
//         <Service /> */}
//         {/* <Contact /> */}
//       </BrowserRouter>
//     </>
//   );
// }
