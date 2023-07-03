import { Conquista } from "../models/consquista";
import { Pedido } from "../models/pedido";

export function pedidoParser(payload: any) {
    return { ...payload, date: new Date(payload.date) } as Pedido
}

export function conquistaParser(payload: any) {
    return { ...payload, dataConquista: new Date(payload.dataConquista) } as Conquista
}