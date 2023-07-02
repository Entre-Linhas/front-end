import { Pedido } from "../models/pedido";

export function pedidoParser(payload: any) {
    return { ...payload, date: new Date(payload.date) } as Pedido
}