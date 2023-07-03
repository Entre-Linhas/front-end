import { Conquista } from "../models/consquista";
import { Pedido } from "../models/pedido";
// adicionei isso
import { RedeSocial } from "../models/redesocial";

export function pedidoParser(payload: any) {
    return { ...payload, date: new Date(payload.date) } as Pedido
}

export function conquistaParser(payload: any) {
    return { ...payload, dataConquista: new Date(payload.dataConquista) } as Conquista
}

export function redesocialParser(payload: any) {
    return { ...payload, link: "" } as RedeSocial
}