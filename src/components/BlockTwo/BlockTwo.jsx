import React from 'react';
import * as S from './styles';
import mailbot from '../../assets/img/mailbot.png';

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
    </S.Wrapper>
  );
}
