import app from "./app.js";
import { PORT } from "./config.js";

// Servidor
app.listen(PORT, () => {
  console.log(`serve activo en el puerto ${PORT}`);
});
