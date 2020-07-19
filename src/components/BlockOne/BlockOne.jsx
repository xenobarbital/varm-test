import React from 'react';
import { Button, Typography } from "antd";
import * as S from './styles';

const { Text, Link } = Typography;

export const BlockOne = () => {
  return (
    <S.Wrapper>
      <S.HeaderCont>
        <S.Header>
          Build the messaging experience your users are looking for
        </S.Header>
        <S.Subheader>
          Comprehensive solutions of messaging experiences for implementing into
          your existing software.
        </S.Subheader>
      </S.HeaderCont>
      <S.BodyCont>
        <S.ButtonCont>
          <Button type="primary" size="large">
            Get Started Now
          </Button><br/><br/>
        </S.ButtonCont>
        <span>
          <S.CheckIcon /><Text>Messaging Channels</Text>
          <S.CheckIcon /><Text>Chatbots</Text>
          <S.CheckIcon /><Text>Live Chat</Text>
        </span>
      </S.BodyCont>
    </S.Wrapper>
  );
}
