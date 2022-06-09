import styledComponents from 'styled-components';
import { Send } from '@material-ui/icons';

const Container = styledComponents.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styledComponents.h1`
    font-size: 50px;
    font-weight: normal;
    margin-bottom: 20px;
`;

const Description = styledComponents.div`
    font-size: 20px;
    font-weight: 300px;
    margin-bottom: 20px;
`;

const InputContainer = styledComponents.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid #D3D3D3;
`;

const Input = styledComponents.input`
    padding-left: 20px; 
    border: none;
    flex: 7;
`;

const Button = styledComponents.button`
    flex: 1;
    border: none;
    background-color: #008080;
    color: #fff;
    cursor: pointer;
`;

const News = () => {
    return (
        <Container>
            <Title>News</Title>
            <Description>Get timely updates from your favorite products.</Description>
            <InputContainer>
                <Input type="text" placeholder='Your email' />
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default News;