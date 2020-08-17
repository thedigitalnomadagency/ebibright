import styled from "styled-components"

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .countdownItem {
    color: #111;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 20px;
    position: relative;
    width: 60px;
    height: 60px;

    @media screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 30px;
      margin: 10px;
      padding-top: 10px;
      width: 100px;
      height: 100px;
    }

    span {
      color: #333;
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;

      @media screen and (min-width: 768px) {
        font-size: 12px;
      }
    }
  }
`
