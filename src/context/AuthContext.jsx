import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/config";

// getAuth();
// signInWithEmailAndPassword();
// AuthProvider();

// CREACION DE CONTEXTO
const AuthContext = createContext();

//ARMADO DE MI CUSTOM HOOK
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};

//ARMADO DEL PROVEEDOR
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsuscribe;
  }, []);
  // 'unsuscribe' es un observador si hay usuario logueado para ver que se renderiza, y luego lo retiro con el return

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const values = {
    user,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
