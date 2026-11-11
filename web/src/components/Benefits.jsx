import iconSeguranca from '../assets/icon-seguranca.png'
import iconRelogio from '../assets/icon-relogio.png'
import iconLocalizacao from '../assets/icon-localizacao.png'

function Benefits() {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-dark-blue/30 backdrop-blur-sm border border-gray/10 rounded-2xl shadow-xl list-none m-0 p-6 w-full lg:w-[75%] ml-auto">
            <li className="flex items-center space-x-4 p-3 rounded-xl transition-colors">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green/10 rounded-lg border border-green/20">
                    <img src={iconSeguranca} alt="Segurança" className="w-6 h-6 object-contain" />
                </div>
                <div>
                    <strong className="block text-white font-semibold text-base">Segurança</strong> 
                    <span className="text-gray text-sm">Sob carga protegida</span>
                </div>
            </li>

            <li className="flex items-center space-x-4 p-3 rounded-xl transition-colors">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green/10 rounded-lg border border-green/20">
                    <img src={iconRelogio} alt="Pontualidade" className="w-6 h-6 object-contain" />
                </div>
                <div>
                    <strong className="block text-white font-semibold text-base">Pontualidade</strong> 
                    <span className="text-gray text-sm">Compromisso com prazo</span>
                </div>
            </li>

            <li className="flex items-center space-x-4 p-3 rounded-xl transition-colors">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green/10 rounded-lg border border-green/20">
                    <img src={iconLocalizacao} alt="Abrangência" className="w-6 h-6 object-contain" />
                </div>
                <div>
                    <strong className="block text-white font-semibold text-base">Abrangência</strong> 
                    <span className="text-gray text-sm">Atendemos todo o Brasil</span>
                </div>
            </li>
        </ul>
    )
}

export default Benefits;