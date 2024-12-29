import { supabase } from "./supabaseConfig.js";  // Aquí estaba el error de la coma
import { products } from './productsMock.js'; // Importa usando llaves

const insertProducts = async () => {
    try {
        // Inserta los productos en la tabla "products"
        const { data, error } = await supabase
            .from("products")
            .insert(products);

        if (error) {
            console.error("Error inserting products:", error);
        } else {
            console.log("Products inserted successfully:", data);
        }
    } catch (err) {
        console.error("Error:", err);
    }
};

insertProducts();