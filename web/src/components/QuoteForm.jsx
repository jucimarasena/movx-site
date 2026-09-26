import { useState } from "react";

const initialFormData = {
    name: '',
    company: '',
    email: '',
    phone: '',
    origin: '',
    destination: '',
    cargoType: '',
    weight: '',
    msg: ''
};
function QuoteForm() {

    const [formData, setFormData] = useState({ ...initialFormData })

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();


        try {
            const answer = await fetch(`${import.meta.env.VITE_API_URL}/orcamento`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!answer.ok) {
                throw new Error('Erro ao enviar');
            }

            const result = await answer.json();
            console.log(result.mensagem);
            alert("Orçamento enviado com sucesso! Em breve entraremos em contato.")

            setFormData({...initialFormData});

        } catch(erro) {
            console.error(erro);
            alert('Ocorreu um erro ao enviar. Tente novamente.')
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nome completo" value={formData.name} onChange={handleChange} />
            <input type="text" name="company" placeholder="Empresa (opcional)" value={formData.company} onChange={handleChange} />
            <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Telefone / WhatsApp" value={formData.phone} onChange={handleChange} />
            <input type="text" name="origin" placeholder="Origem" value={formData.origin} onChange={handleChange} />
            <input type="text" name="destination" placeholder="Destino" value={formData.destination} onChange={handleChange} />

            <select name="cargoType" value={formData.cargoType} onChange={handleChange}>
                <option value="">Tipo de carga</option>
                <option value="fracionada">Fracionada</option>
                <option value="completa">Completa</option>
                <option value="dedicada">Dedicada</option>
            </select>

            <input type="number" name="weight" placeholder="Peso aproximado (kg)" value={formData.weight} onChange={handleChange} />
            <textarea name="msg" placeholder="Descreva sua necessidade" value={formData.msg} onChange={handleChange}></textarea>

            <button type="submit">Enviar Solicitação</button>
        </form>
    );
}

export default QuoteForm;