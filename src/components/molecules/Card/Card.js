import React  from "react";
import styled from 'styled-components';
import axios from 'axios'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 350px;
  width: 400px;
  border-radius: 25px;
  box-shadow: 10px 10px 10px 10px hsla(0, 0%, 0%, 0.3);
  background-color: white;
`;

const InnerWrapper = styled.div`
  height: 20%;
  width: 100%;
  padding: 17px 29px 10px;
  background-color: #90EE90;
`

const ButtonWrapper = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 15px;
  background-color: white;

`
const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
  background-color: white;
  text-align: center;
`;


class Card extends React.Component {
  state = {
    quote: '',
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = () => {
    axios.get('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then((response) => {
        const quoteArr = (response.data)
        const singleQuote = quoteArr.map(el => el.quote)

        const randomQuote = singleQuote[Math.floor(Math.random() * singleQuote.length)]
        const  quote  = randomQuote;
        
        this.setState({ quote });

      })
      .catch((error) => {
        console.log(error);
      });
  }


  backToPrevQuote = () => {
    console.log('ok')
  }

  render() {
    return (
      <StyledWrapper>
        <InnerWrapper>
          <Heading>Draw a quote</Heading>
        </InnerWrapper>
        <CenterWrapper>
          <Paragraph>{this.state.quote}</Paragraph>
        </CenterWrapper>
        <ButtonWrapper>
          <Button prev onClick = {this.backToPrevQuote}> prev</Button>
          <Button onClick={this.fetchQuote}> next </Button>
        </ButtonWrapper>
      </StyledWrapper>
    );
  }
}

export default Card;

