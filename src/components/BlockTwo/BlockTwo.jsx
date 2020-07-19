import React from 'react';
import { Typography } from "antd";
import * as S from './styles';
import mailbot from '../../assets/img/mailbot.png';
import { data } from './data';

const { Text } = Typography;

const UiTile = ({ icon, title, text }) => {
  return (
    <S.TileWrapper>
      <S.TileIcon src={icon} alt="title" />
      <S.TileTitle>{title}</S.TileTitle>
      <S.TileText>{text}</S.TileText>
    </S.TileWrapper>
  );
}

export const BlockTwo = () => {
  return (
    <S.Wrapper>
      <S.TopSection>
        <S.HeaderCont>
          <S.Header>Innovate the way you communicate with customers</S.Header>
          <S.Subheader>
            Our solutions help you to enhance your business with the power of
            communication. Best-in-class features help you to speed up
            development time, reduce costs and gain customer satisfaction
            quickly than ever
          </S.Subheader>
        </S.HeaderCont>
        <S.ImageCont>
          <S.MailBot alt="mailbot" src={mailbot} />
        </S.ImageCont>
      </S.TopSection>
      <S.BottomSection>
        {data.map(e => (
          <UiTile
            key={e.title}
            icon={e.icon}
            title={e.title}
            text={e.text}
          />
        ))}
      </S.BottomSection>
    </S.Wrapper>
  );
}
