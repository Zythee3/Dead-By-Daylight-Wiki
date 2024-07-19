const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/characters", async (req, res) => {
  try {
    const response = await axios.get("https://dbd.tricky.lol/api/characters");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Erro ao acessar a API externa");
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
