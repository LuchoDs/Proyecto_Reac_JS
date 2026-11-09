//Oulet como children del main (igual que public)
//dejo una ruta afuera que es el componente LOGIN  (no tiene que quedar protegido porque sino pide login para ver login)
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};
