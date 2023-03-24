import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  color: white;

  margin-top: 35px;
  margin-bottom: 15px;
  border-radius: 12px;
  background: #222222;
  box-shadow: 0px 0px 8px black;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';

    .title {
      grid-area: title;
      margin-bottom: 20px;
      color: #fa9600;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
      text-align: end;
    }

    .delivery-tax {
      grid-area: delivery-tax;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
      text-align: end;
    }
  }
  .container-bottom {
    display: flex;
    font-weight: bold;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.3rem;
    margin-top: 50px;
  }
`

export const Button = styled.button`
  box-shadow: 0px 0px 8px black;
`
