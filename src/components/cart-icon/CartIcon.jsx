import { CartIconContainer, ItemCount, ShoppingIcon } from './cartIcon.styles';

import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const { cartTotalCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemCount>{cartTotalCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;