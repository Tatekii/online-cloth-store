import { ProductItem } from "@/types";
import { FC } from "react";
import styled from "@emotion/styled";
import ProductCardAddButton from "./product-card-add-button";

const ProductCard: FC<{ product: ProductItem }> = ({ product }) => {
  const { name, price, imageUrl } = product;

  const ProductCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    &:hover {
      img {
        opacity: 0.8;
      }

      button {
        opacity: 0.85;
        display: flex;
      }
    }
  `;

  const ProductImg = styled.img`
    width: 100%;
    height: 95%;
    object-fit: cover;
    padding-bottom: 5px;
  `;

  const ProductDetail = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  `;

  const ProductName = styled.span`
    width: 90%;
    margin-bottom: 15px;
  `;

  const ProductPrice = styled.span`
    width: 10%;
  `;
  return (
    <ProductCardContainer>
      <ProductImg src={imageUrl} alt={`${name}`} />
      <ProductDetail>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductDetail>
      <ProductCardAddButton product={product} />
    </ProductCardContainer>
  );
};
export default ProductCard;
