import styled from 'styled-components';
import { CheckOutlined } from "@ant-design/icons";
import connect from '../../assets/img/connect.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderCont = styled.div`
  text-align: center;
  width: 90%;
  padding-top: 50px;
  padding-bottom: 25px;
  @media (min-width: 768px) {
    padding-top: 100px;
    width: 80%;
  }
  @media (min-width: 992px) {
    width: 70%;
  }
  @media (min-width: 1200px) {
    width: 60%;
  }
  @media (min-width: 1600px) {
    width: 50%;
  }
`;

export const Header = styled.h1`
  font-size: 30px;
  font-weight: bold;
  line-height: 40px;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const Subheader = styled.p`
  font-size: 14px;
`;

export const BodyCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 150px;
  background: url(${connect});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  @media (min-width: 768px) {
    background-size: contain;
    height: 300px;
  }
`;

export const ButtonCont = styled.div`
  margin-bottom: 10px;
`;

export const CheckIcon = styled(CheckOutlined)`
  color: #4F6AFF;
  cont-size: 10px;
  margin: 0 4px 0 10px;
`;

