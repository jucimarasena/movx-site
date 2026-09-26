import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;



app.use(cors());
app.use(express.json());


app.post('/orcamento', (req,res) => {

    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({ erro: 'Nome e e-mail são obrigatórios' });
    }
    console.log('Dados recebidos:', req.body);
    res.json({ mensagem: 'Orçamento recebido com sucesso!'});
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})