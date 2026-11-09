// me voy a traer el header, main, y footer desde app
//voy a trabajar con OULET: es como un children para renderizar las rutas publicas del react router dom
//en App voy a armar un route = element=PublicLayout y por children dejo todas las rutas publicas adentro

import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export const PublicLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
