import styled from 'styled-components/native';

import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #e1ebeb;
  padding: 5px;
`;

export const Question = styled.View`
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const Header = styled.View``;
export const Chapter = styled.Text`
  width: 50%;
  background: #787250;
  color: #fff;
  justify-content: center;
  font-weight: bold;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 0 10px;
`;
export const Ask = styled.Text`
  min-height: 100px;
  background: #21635c;
  opacity: 0.8;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  padding: 20px;
  border-radius: 5px;
  border-top-left-radius: 0;
`;

export const Responses = styled.View``;
export const ResponseButton = styled(RectButton)`
  flex-direction: row;
  margin: 5px 0;
  background: #787250;
  font-weight: bold;
  border-radius: 5px;
`;

export const ResponseIcon = styled.Text`
  background: #21635c;
  opacity: 0.8;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
  padding: 15px 25px;
  font-weight: bold;
  border-radius: 5px;
`;
export const ResponseText = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  padding: 20px;
`;
export const Action = styled.View`
  align-items: flex-end;
  padding: 10px 20px;
`;
export const ButtonNext = styled(RectButton)`
  background: #fff;
  border-radius: 5px;
  padding: 10px;
`;
export const TextNext = styled.Text`
  color: #7159c1;
  font-weight: bold;
`;
