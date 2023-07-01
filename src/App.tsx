import { useAtom, useAtomValue, atom } from 'jotai'
import './App.css'
import { CartItem, cartAtom } from './store/cart.store';
import CartList from './components/cart-list';

function App() {
  const [cart, setCart] = useAtom(cartAtom);

  const totalPriceAtom = atom(() => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return total;
  })

  const cartItem: CartItem = {
    productName: "Realme GT Master Edition",
    productDescription: "Mobile",
    price: 19999
  }

  const addItemsToCartHandler = () => {
    setCart((prevState) => [...prevState, cartItem])
  }

  return (
    <>
      <button onClick={addItemsToCartHandler}>Add Item to Cart</button>
      <CartList />
      <p>Total Price: {useAtomValue(totalPriceAtom)}</p>
    </>
  )
}

export default App
