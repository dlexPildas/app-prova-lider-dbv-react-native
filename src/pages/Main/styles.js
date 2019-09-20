import styled from 'styled-components/native';

import {RectButton} from 'react-native-gesture-handler';
export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 5px;
`;

export const Header = styled.View`
  margin-top: 10px;
  height: 180px;
  background: #7159c1;
  opacity: 0.8;
  border-radius: 10px;
`;
export const Box = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
`;
export const Logo = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 37.5px;
  margin-right: 10px;
`;
export const Message = styled.View`
  flex: 1;
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  margin-bottom: 5px;
`;
export const Text = styled.Text`
  line-height: 20px;
  font-weight: bold;
  font-size: 14px;
  color: #f5f5f5;
`;
export const ButtonKnowMore = styled(RectButton)`
  background: #fff;
  border: 0;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin: 10px;
  height: 48px;
`;

export const KnowMoreText = styled.Text`
  font-weight: bold;
  color: #7159c1;
`;
export const Actions = styled.View`
  margin-top: 10px;
  flex: 1;
  justify-content: center;
`;
export const Button = styled(RectButton)`
  height: auto;
  margin: 5px 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #aaa;

  border-radius: 10px;
`;

export const ImageButton = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-right: 10px;
`;

export const TextButton = styled.Text`
  flex: 1;
  line-height: 20px;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  margin-right: 10px;
`;

export const SalvationAndService = styled(RectButton)``;
export const ECA = styled(RectButton)``;
