import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./components/Categories";
import DetailsProduit from "./components/DetailsProduit";
import Home from "./components/Home";
import ListeProdCategirie from "./components/ListeProdCategirie";
import Produits from "./components/Produits";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="categories">
              <Route index element={<Categories />} />
              <Route path=":id" element={<ListeProdCategirie />} />
          </Route>
          <Route path="produits"  >
              <Route index element={<Produits />} />
              <Route path=":id" element={<DetailsProduit />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
