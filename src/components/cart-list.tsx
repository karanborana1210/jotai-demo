import { useAtom } from 'jotai';
import { cartAtom } from '../store/cart.store';

const CartList = () => {

    const [cart, ] = useAtom(cartAtom);


    return (
        <>
            {cart?.map((c) => (
                <>
                    <p>{c.productName}</p>
                    <p>{c.productDescription}</p>
                    <p>{c.price}</p> 
                </>
            ))}
        </>
    )
}

export default CartList