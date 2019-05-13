import React from 'react'
import {TextInput, Button} from 'react-native-paper'
import styled from 'styled-components/native'

const Login = props => (
    <Container>
        <LogInContainer>
            <Header>Log In</Header>
            <TextInput
                type = 'flat'
                label = 'Email'
                keyboardType = 'email-address'
            />
            <TextInput
                type = 'outlined'
                label = 'Senha'
                secureTextEntry = {true}
            />
            <Button mode="contained" onPress={()=>{}}>
                Entrar
            </Button>
            <Button mode="text" onPress={() => props.navigation.navigate('PubsList')}>
                entrar sem logar
            </Button>
            <Button mode="text" onPress={() => props.navigation.navigate('SignUp')}>
                criar conta
            </Button>
        </LogInContainer>
    </Container>
)

export default Login

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #e6e6e6;
`

const LogInContainer = styled.KeyboardAvoidingView`
    justify-content: space-around;
    width: 300;
    height: 400;
`
const Header = styled.Text`
    font-size: 30px;
    text-align: center;
`