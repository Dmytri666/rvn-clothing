import {
  Footer,
  Image,
  Name,
  Price,
  ProductCardContainer,
  ProductButton,
} from "./product-card.style";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>

        <Price>{price}</Price>
      </Footer>
      <ProductButton
        as={Button}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </ProductButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
