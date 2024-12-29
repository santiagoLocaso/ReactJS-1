// import { createClient } from "@supabase/supabase-js";

// // URL y clave para conectar con Supabase
// const supabaseUrl = "https://wnkgjekucivblvescuci.supabase.co";
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; // Usando variables de entorno con Vite

// const supabase = createClient(supabaseUrl, supabaseKey);

// // Exportar por defecto
// export default supabase;

import { createClient } from '@supabase/supabase-js';

// URL de Supabase
const supabaseUrl = 'https://wnkgjekucivblvescuci.supabase.co';

// Usando la variable de entorno correctamente
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// Verifica si la clave está definida
if (!supabaseKey) {
    throw new Error('supabaseKey is required');
}

// Crear cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);
