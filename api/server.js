import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = 3000;
const resend = new Resend(process.env.RESEND_API_KEY);


app.use(cors());
app.use(express.json());


app.post('/orcamento', async (req,res) => {

    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({ erro: 'Nome, e-mail e phone são obrigatórios' });
    }

    try{
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'jucimarasena@gmail.com',
            subject: `Novo pedido de orçamento — ${name}`,
            html: `
                <h2>Novo pedido de orçamento</h2>
                <p><strong>Nome:</strong> ${req.body.name}</p>
                <p><strong>Empresa:</strong> ${req.body.company}</p>
                <p><strong>E-mail:</strong> ${req.body.email}</p>
                <p><strong>Telefone:</strong> ${req.body.phone}</p>
                <p><strong>Origem:</strong> ${req.body.origin}</p>
                <p><strong>Destino:</strong> ${req.body.destination}</p>
                <p><strong>Tipo de carga:</strong> ${req.body.cargoType}</p>
                <p><strong>Peso:</strong> ${req.body.weight} kg</p>
                <p><strong>Descrição:</strong> ${req.body.msg}</p>
            `,
        });
        res.json({ mensagem: 'Orçamento recebido com sucesso!'});
    } catch (erro) {
        console.erro(erro); 
        res.status(500).json({ erro: 'Erro ao enviar e-mail'});
    }
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})