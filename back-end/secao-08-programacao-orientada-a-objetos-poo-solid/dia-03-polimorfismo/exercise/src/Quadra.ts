import { IAgenda } from "./interfaces/IAgenda";

abstract class Quadra { 
    abstract reservar<T>(horaReserva: Date): IAgenda<T>
 }

export default Quadra;