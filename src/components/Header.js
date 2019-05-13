import React from 'react';
import styled from 'styled-components/native'
import {Button} from 'react-native-paper'

const Header = props =>{   
    return(
        <Container>
            <Title>{props.title}</Title>
            { props.hideSettings
                ? null
                :<ButtonContainer>
                    <Button 
                        icon="settings" 
                        mode="text" color='black' 
                        compact={true} 
                        onPress={() => props.nav.navigate('MyProfile')}
                    />
                </ButtonContainer>
            }
        </Container>
    )    
}

export default Header

const Container = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
`

const Title = styled.Text`
    flex: 1;
    font-size: 20px;
`
const ButtonContainer = styled.View`
    align-self: flex-end;
    width: 40px;
`