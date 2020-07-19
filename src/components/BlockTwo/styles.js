import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(245, 246, 255, 0.8);
  margin-top: 50px;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 50px;
  }
`

export const HeaderCont = styled.div`
  width: 90%;
  padding-top: 50px;
  padding-bottom: 25px;
  @media (max-width: 767px) {
    text-align: center;
  }
  @media (min-width: 768px) {
    padding-top: 100px;
    padding-left: 100px;
    width: 50%;
  }
`;

export const Header = styled.h2`
  font-size: 25px;
  font-weight: bold;
  line-height: 35px;
  @media (min-width: 768px) {
    font-size: 35px;
    line-height: 45px;
  }
`;

export const Subheader = styled.p`
  font-size: 14px;
`;

export const ImageCont = styled.div`

`;

export const MailBot = styled.img`
  max-width: 90%;
`;

export const BottomSection = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  @media (min-width: 768px) {
    padding: 0 80px 20px 100px;
  }
`;

export const TileWrapper = styled.div`
  flex-grow: 1;
  padding: 20px;
  @media (max-width: 767px) {
    text-align: center;
  }
  @media (min-width: 768px) {
    padding: 20px 40px 20px 0 ;
  }
`;

export const TileIcon = styled.img`
  margin-bottom: 20px;
`;

export const TileTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
`;

export const TileText = styled.p`
  color: #060A26;
  font-size: 18px;
`;
