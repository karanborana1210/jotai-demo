import { atom } from 'jotai';

export interface CartItem {
    productName: string,
    productDescription: string,
    price: number
}

export const cartAtom = atom<CartItem[]>([]);
