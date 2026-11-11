import { Navigate, Routes, Route } from "react-router-dom";
import { ItemListConteiner } from "./components/ItemListConteiner/ItemListConteiner";
import { ItemDetailConteiner } from "./components/ItemDetailConteiner/ItemDetailConteiner";
import { ListCategoryConteiner } from "./components/ListCategoryConteiner/ListCategoryConteiner";
import "./App.css";
import { CartView } from "./components/Cart/CartView";
import { ProductFormConteiner } from "./components/adminComponents/ProductsForm/ProductFormConteiner";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { Login } from "./components/Login/Login";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Dashboard } from "./components/adminComponents/Dashboard/Dashboard";
import { ProductManagement } from "./components/adminComponents/ProductManagement";
import { OrdersManagement } from "./components/adminComponents/OrdersManagement";
import { Meme } from "./components/adminComponents/Meme";

function App() {
  return (
    <>
      <Routes>
        {/*----------------------------- RUTAS PUBLICAS ------------------------------  */}
        <Route element={<PublicLayout />}>
          {/* este route se vuelve el lugar por donde van a correr las rutas a traves del OUTLET */}
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/product/:id" element={<ItemDetailConteiner />} />
          <Route path="/categorias" element={<ListCategoryConteiner />} />
          <Route path="/category/:category" element={<ItemListConteiner />} />
        </Route>
        {/* aca cierro lo que va a correr por PublicLayout */}
        {/* Login por fuera de AdminLayout para acceder si no estamos logueados */}
        <Route path="/admin/login" element={<Login />} />
        /* --------------------------------- ------
        --------------------------------- */ /*
        --------------------------------- ------
        --------------------------------- */
        {/* ------------------------------- RUTAS ADMIN ------------------------------  */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />

          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<h2>Bienvenido al Panel</h2>} />
            <Route path="products/manage" element={<ProductManagement />} />
            <Route path="orders" element={<OrdersManagement />} />
            <Route path="products/new" element={<ProductFormConteiner />} />
            <Route
              path="products/edit/:id"
              element={<ProductFormConteiner />}
            />
            <Route path="products/success/:id" element={<ProductSuccess />} />
            <Route path="meme" element={<Meme />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
export default App;
