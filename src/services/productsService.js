import {
  doc,
  query,
  where,
  getDoc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";

// para tomar referencia de una coleccion "collection": necesita la base de datos, y el nombre de la coleccion.
//Ya tengo la referencia con esas dos cosas
const productsRef = collection(db, "products");

/*-----------------------------------------------------*/
/*                    TRAER PRODUCTOS                  */
/*-----------------------------------------------------*/
//QUE TRAIGA TODOS LOS PRODUCTOS.
export const getProducts = async () => {
  //snapshot es "una foto" de lo que hay en ese momento que yo hago la solitud (como el SIGO)
  //productsRef me trae toda la collecion
  //el retorno de getDocs es un QuerySnapshot y lo atrapo en la variable snapshot. Lo tengo que trabajar.
  //para armar nuevo objeto, snapshot.docs.map()
  try {
    const snapshot = await getDocs(productsRef);

    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    }); //este metodo data():
    //mi objeto viene como const producto = { id:123rde,
    // el id esta por afuera                  data: {name:"bla", price:2345}}
    //esto es lo que debo unificar, el id de afuera y lo del data.
    //haciendo esto lo convierto en un array para que lo puedan usar mis componentes.

    return productsFormat;
  } catch (error) {
    console.log("Error al traer productos", error);
    throw error;
  }
};
/*-----------------------------------------------------*/
/*                TRAER UN PRODUCTO POR ID             */
/*-----------------------------------------------------*/
export const getProductsById = async (id) => {
  try {
    const productRef = doc(productsRef, id);

    const snapshot = await getDoc(productRef);

    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      console.log("Doc:", product);
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.error("error al buscar producto por ID: ", error);
    throw error;
  }
};

/*-----------------------------------------------------*/
/*     FILTRO DINAMICO DE CATEGORIA PARA BOTONES       */
/*-----------------------------------------------------*/

export const getCategories = async () => {
  try {
    const snapshot = await getDocs(productsRef);

    const categories = snapshot.docs.map((doc) => {
      return (doc.data().category || "categoria-no-definida").toLowerCase();
    });

    const filteredCategories = [...new Set(categories)];
    return filteredCategories;
  } catch (error) {
    console.log("Error al armar categoria: ", error);
    throw error;
  }
};

/*----------------------------------------------------- */
/*          FILTRO DE PRODUCTOS POR CATEGORIA          */
/*----------------------------------------------------*/

export const getProductsByCategory = async (category) => {
  try {
    const q = query(productsRef, where("category", "==", category));
    const querySnapshot = await getDocs(q);

    const fileteredProducts = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return fileteredProducts;
  } catch (error) {
    console.log("Error al filtrar productos por categoria: ", error);
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                              ALTA DE PRODUCTO                              */
/* -------------------------------------------------------------------------- */
export const createProduct = async (productData) => {
  try {
    const docRef = await addDoc(productsRef, productData); //productsRef es la referencia de mi coleccion en la base de datos, productData es mi nuevo documento que se agregara a la coleccion
    //addDoc es función de Firebase para agregar documentos a una colección
    return docRef.id; //por si quiero usar el id en algun otro
  } catch (error) {
    console.error("Error al crear el producto", error);
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                              ELIMINAR PRODUCTO                             */
/* -------------------------------------------------------------------------- */
export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productsRef, id);
    await deleteDoc(productRef);
    return id;
  } catch (error) {
    console.error("error al eliminar producto por ID: ", error);
    throw error;
  }
};

/* -------------------------------------------------------------------------- */
/*                             MODIFICAR PRODUCTO                             */
/* -------------------------------------------------------------------------- */
export const updateProduct = async (id, productData) => {
  try {
    const productRef = doc(productsRef, id);
    await updateDoc(productRef, productData);
    return id;
  } catch (error) {
    console.error("error al modificar producto por ID: ", error);
    throw error;
  }
};
