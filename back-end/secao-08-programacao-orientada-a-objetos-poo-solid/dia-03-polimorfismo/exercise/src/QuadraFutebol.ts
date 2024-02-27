import Quadra from "./Quadra";
import normas from './normas/normasDeUso';
import { IAgenda } from "./interfaces/IAgenda";
import { IFutebol } from "./interfaces/IFutebol";
import { v4 } from 'uuid';

class QuadraFutebol extends Quadra {

    public futebolData: IFutebol = normas.futebol;
    public reservar<IFutebol>(horaReserva: Date) {
        const protocolo = v4();

        return {
            protocolo,
            data: horaReserva,
            regras: this.futebolData as unknown as IFutebol,
          };
    }
}

export default QuadraFutebol; 