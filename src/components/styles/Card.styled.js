import styled from "styled-components"
import pattern from "../../images/bg-pattern-card.svg"

export const GridCenter = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export const Container = styled.div`
  background-color: #fff;
  width: 400px;
  height: 350px;
  border-radius: 1rem;
  display: grid;
  grid-template-rows: 35% 45% 20%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 350px;
  }

  @media (max-width: ${({ theme }) => theme.mobile_sm}) {
    width: 300px;
  }
`
export const Header = styled.div`
  width: 100%;
  background: url(${pattern});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem 1rem 0 0;
`
export const Content = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #ddd;
  display: grid;
  grid-template-rows: 1fr 1fr;
  text-align: center;

  h3 {
    color: ${({ theme }) => theme.colors.Very_dark_desaturated_blue};
    font-size: ${({ theme }) => theme.fontSizes.name_and_stats};
    margin-bottom: 0.5rem;

    span {
      color: ${({ theme }) => theme.colors.Dark_grayish_blue};
      font-weight: 400;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.Dark_grayish_blue};
    font-size: 1rem;
  }
`
export const Image = styled.img`
  position: absolute;
  left: 50%;
  top: -50%;
  transform: translate(-50%, 30%);
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 5px solid #fff;
`
export const Footer = styled.div`
  width: 100%;

  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid #ddd;

  div {
    h3 {
      color: ${({ theme }) => theme.colors.Very_dark_desaturated_blue};
      font-size: ${({ theme }) => theme.fontSizes.name_and_stats};
    }

    p {
      font-size: 0.7rem;
      letter-spacing: 0.1rem;
      color: ${({ theme }) => theme.colors.Dark_gray};
    }
  }
`
