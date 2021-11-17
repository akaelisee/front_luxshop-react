import styled from 'styled-components'

const Rows = styled.div`
  margin: 50px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
  .col__her {
    position: relative;
    .her__looks {
      text-align: center;
      position: absolute;
      bottom: 40px;
      left: 15px;
      span {
        font-size: 28px;
        margin: 0;
        letter-spacing: 3px;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        text-transform: uppercase;
        line-height: 35px;
      }
      .btn__her {
        margin: 15px 0;
        a {
          padding: 7px 50px;
          border: 1px solid #000;
          text-transform: uppercase;
          font-size: 12px;
          text-decoration: none;
          color: #000;
          letter-spacing: 2px;
          transition: all 0.3s ease;
          &:hover {
            color: #fff;
            background-color: rgba(7, 17, 32, 0.933);
            border: 1px solid rgba(7, 17, 32, 0.933);
          }
        }
      }
    }
  }
  .col__him {
    position: relative;
    .him__looks {
      text-align: center;
      position: absolute;
      top: 40px;
      right: 15px;
      span {
        font-size: 28px;
        margin: 0;
        letter-spacing: 3px;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        text-transform: uppercase;
        line-height: 35px;
        color: #fff;
      }
      .btn__him {
        margin: 15px 0;
        a {
          padding: 7px 50px;
          border: 1px solid #fff;
          text-transform: uppercase;
          font-size: 12px;
          text-decoration: none;
          color: #fff;
          letter-spacing: 2px;
          transition: all 0.3s ease;
          &:hover {
            color: #fff;
            background-color: rgba(7, 17, 32, 0.933);
            border: 1px solid rgba(7, 17, 32, 0.933);
          }
        }
      }
    }
  }

  @media screen and (max-width: 640px) {
    display: block;
    .col__her {
      margin-bottom: 25px;
    }
  }
`

export default Rows
