import React from "react"
import { styled } from "twin.macro"

export default ({ num, text }) => {
  return (
    <Header>
      <div className="wrapper">
        <div className="number">
          <p>{num}</p>
        </div>
        <h1 className="text">{text}</h1>
      </div>
      <div className="line"></div>
    </Header>
  )
}

const Header = styled.div`
  margin-top: 35px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-left: 10px;
  }

  .wrapper {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding-bottom: 5px;
    padding-left: 2px;
  }

  .number {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--ndc-red);
    color: white;
    width: 60px;
    height: 60px;
    font-size: 34px;
    font-weight: 600;

    @media screen and (min-width: 768px) {
      width: 120px;
      height: 120px;
      font-size: 50px;
    }
  }

  .text {
    font-size: 23px;
    font-weight: 700;
    text-transform: uppercase;
    padding-left: 2px;

    @media screen and (min-width: 768px) {
      font-size: 50px;
      padding-left: 20px;
      width: 800px;
    }
  }

  .line {
    width: 100vw;
    height: 5px;
    background-color: var(--ndc-red);

    @media screen and (min-width: 768px) {
      width: 80vw;
    }
  }
`
