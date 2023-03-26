import React from 'react'
import { Link } from 'react-router-dom'

import cart from '../../assets/cart.png'
import trash from '../../assets/trash.png'
import { Button } from '../../components/Button'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  Img,
  Header,
  Content,
  ProductDecription,
  Trash,
  EmpyCart
} from './style'
export function CartItens () {
  const { cartProducts, increseProducts, decreseProducts, deleteProducts } =
    useCart()

  return (
    <Container>
      <Header>
        <p style={{ width: '100px' }}></p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Qto</p>
        <p>Total</p>
        <p></p>
      </Header>

      {cartProducts && cartProducts.length > 0
        ? (
            cartProducts.map((product) => (
          <Content key={product.id}>
            <Img src={product.url} />
            <ProductDecription>{product.name}</ProductDecription>
            <ProductDecription>
              {formatCurrency(product.price)}
            </ProductDecription>
            <ProductDecription>
              <div className="quantity-container">
                <button onClick={() => decreseProducts(product.id)}>-</button>
                {product.quantity}
                <button onClick={() => increseProducts(product.id)}>+</button>
              </div>
            </ProductDecription>
            <ProductDecription>
              {formatCurrency(product.quantity * product.price)}
            </ProductDecription>

            <Trash onClick={() => deleteProducts(product.id)}>
              <img src={trash} />
            </Trash>
          </Content>
            ))
          )
        : (
        <>
          <EmpyCart>
            <img src={cart} />
            Carrinho vazio
          </EmpyCart>{' '}
          <Button style={{ marginTop: '12px', padding: '5px', fontSize: '1.2rem' }}>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/produtos">
              Ir para área de produtos
            </Link>
          </Button>
        </>
          )}
    </Container>
  )
}
