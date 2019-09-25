import React, {Component} from 'react';

// import {} from 'react-icons/fa';

import {createAppContainer} from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation-drawer';

import {
  Container,
  Question,
  Header,
  Chapter,
  Ask,
  Responses,
  ResponseButton,
  ResponseIcon,
  ResponseText,
  Action,
  ButtonNext,
  TextNext,
} from './styles';

export default class AksAbout7DayAdvBelieve extends Component {
  state = {
    questions: [],
  };

  render() {
    return (
      <Container>
        <Question>
          <Header>
            <Chapter>Capítulo: 1</Chapter>
            <Ask>Qual é o ponto focal das escrituras?</Ask>
          </Header>

          <Responses>
            <ResponseButton>
              <ResponseIcon>A</ResponseIcon>
              <ResponseText>A cruz</ResponseText>
            </ResponseButton>
            <ResponseButton>
              <ResponseIcon>B</ResponseIcon>
              <ResponseText>A volta de Jesus</ResponseText>
            </ResponseButton>
            <ResponseButton>
              <ResponseIcon>C</ResponseIcon>
              <ResponseText>A parábola do filho pródigo</ResponseText>
            </ResponseButton>
            <ResponseButton>
              <ResponseIcon>D</ResponseIcon>
              <ResponseText>O casamento</ResponseText>
            </ResponseButton>
          </Responses>
        </Question>
        {/* <Action>
          <ButtonNext>
            <TextNext>Próxima</TextNext>
          </ButtonNext>
        </Action> */}
      </Container>
    );
  }
}

AksAbout7DayAdvBelieve.navigationOptions = {
  title: 'Nisto Cremos',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#e1ebeb',
      fontWeight: 'bold',
      fontSize: 16,
    },
    headerTintColor: '#fff',
  },
};
