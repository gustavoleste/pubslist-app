import React from 'react'
import {TextInput, Button} from 'react-native-paper'
import styled from 'styled-components/native'

const SignUp = props => (
    <Container>
        <SignUpContainer>
            <Header>Sign Up</Header>
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
                Criar Conta
            </Button>
            <Button mode="text" onPress={() => props.navigation.navigate('PubsList')}>
                entrar sem logar
            </Button>
            <Button mode="text" onPress={() => props.navigation.navigate('LogIn')}>
                já tenho conta
            </Button>
        </SignUpContainer>
    </Container>
)

export default SignUp

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #e6e6e6;
`

const SignUpContainer = styled.KeyboardAvoidingView`
    justify-content: space-around;
    width: 300;
    height: 400;
`
const Header = styled.Text`
    font-size: 30px;
    text-align: center;
`