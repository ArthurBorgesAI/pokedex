import styled from "styled-components";

export const B1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  color: black;
`;

export const Bottom = styled.div`
  background-color: white;
  border: 2px solid;
  border-radius: 25px;
  display: block;
  height: auto;
  margin-bottom: 30px;
  padding-bottom: 50px;
`;

export const Top = styled.div`
  padding-left: 12px;
  padding-right: 12px;
`;

export const Img = styled.img`
  margin-left: 100px;
  width: 37%;
  position: relative;
  display: row;
  left: 33%;
  @media (max-width: 868px) {
    width: 100%;
    left: 3%;
  }
  @media (min-width: 899px) and (max-width: 2000px) {
    width: 37%;
    position: relative;
    display: row;
    left: 23%;
  }
`;

export const Id = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 60px;
  margin-right: 30px;
  @media (max-width: 868px) {
    margin-bottom: 0;
    margin-top: 0;
    margin-right: 3px;
    font-size: 20px;
  }
  @media (min-width: 899px) and (max-width: 2000px) {
    margin-bottom: 0;
    margin-top: 0;
    margin-right: 3px;
    font-size: 40px;
  }
`;

export const H1 = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 120px;
  color: white;
  margin-left: 30px;
  @media (max-width: 868px) {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 40px;
    margin-left: 3px;
  }
  @media (min-width: 899px) and (max-width: 2000px) {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 40px;
    margin-left: 3px;
  }
`;

export const Text = styled.div`
  @media (max-width: 868px) {
    width: 70px;
    font-size: 20px;
  }
  @media (min-width: 899px) and (max-width: 2000px) {
    width: 70px;
    font-size: 20px;
  }
  margin-right: 10px;
  font: bold;
  font-size: 60px;
  text-transform: capitalize;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 5px;
  //padding-left: 10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  width: 300px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const H2 = styled.h2`
  @media (max-width: 868px) {
    font-size: 30px;
  }
  font-size: 40px;
`;

export const Name = styled.div`
  display: block;
`;

export const First = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Second = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  text-transform: capitalize;
`;

export const Type = styled.div`
  display: flex;
`;

export const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
`;

export const Favorite = styled.div`
  padding: 10px;
`;

export const Button = styled.button`
  background-color: transparent;
  padding: 10px;
`;
