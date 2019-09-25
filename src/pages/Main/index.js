import React, {Component} from 'react';

import {ScrollView} from 'react-native';

import {
  Container,
  Header,
  Box,
  Logo,
  Message,
  Title,
  Text,
  ButtonKnowMore,
  KnowMoreText,
  Actions,
  Button,
  ImageButton,
  TextButton,
} from './styles';

import logo from '../../assets/ld1.png';

import nc from '../../assets/nc.jpeg';
import ss from '../../assets/ss.png';
import eca from '../../assets/eca.png';

export default class Main extends Component {
  handleNavigate = () => {
    const {navigation} = this.props;

    navigation.navigate('AsksAbout7DayAdvBelieve');
  };

  render() {
    return (
      <Container>
        <ScrollView>
          <Header>
            <Box>
              <Logo source={logo} />
              <Message>
                <Title>Seja bem vindo, Maranata!</Title>
                <Text>
                  Fala Aspirante, pronto para subir no foguete e embarcar na
                  vitória sobre a prova de líder?
                </Text>
              </Message>
            </Box>
            <ButtonKnowMore>
              <KnowMoreText>Saiba mais</KnowMoreText>
            </ButtonKnowMore>
          </Header>

          <Actions>
            <Button onPress={this.handleNavigate}>
              <ImageButton source={nc} />
              <TextButton>
                Jesus, o foco central da Bíblia e da história!
              </TextButton>
            </Button>
            <Button>
              <ImageButton source={ss} />
              <TextButton>Fala Aspirante, pronto para sub</TextButton>
            </Button>
            <Button>
              <ImageButton source={eca} />
              <TextButton>Estatuto da Criança e do Adolescente</TextButton>
            </Button>
          </Actions>
        </ScrollView>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Prova de Líder DBV',
};
