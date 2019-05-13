import React from 'react';
import {List, Card, Divider} from 'react-native-paper'
import styled from 'styled-components/native'
import {FlatList,View} from 'react-native'

const UserProfile = props => (
    <ScreenContainer>        
        <Card>
            <List.Item
                title='Nome:'
                description={props.navigation.state.params.item.user}
            />         
        </Card>
        <Divider/> 
        <List.Item
            title='Reviews:'
        /> 
        <Divider/>           
        <FlatList
            data={reviews}
            keyExtractor={ item => item.id}
            renderItem={({item}) => (
                <View>                        
                    <List.Item
                        title={item.pub}
                        description={item.review}
                    />
                    <Divider/>
                </View>
            )}
        /> 
    </ScreenContainer>
)

export default UserProfile

const ScreenContainer = styled.View`
    flex: 1;
    background: #e6e6e6;
    padding: 5px;
`

const reviews = [
    {id: '1', user: 'Luiz', review:'Ótimo lugar. Bom atendimento', pub:'Bar do Joarez'},
    {id: '2', user: 'Luiz', review:'Ótimo ambiente', pub:'Bar do zé'},
    {id: '3', user: 'Luiz', review:'Preço justo', pub:'Bar da Esquina'},
    {id: '4', user: 'Luiz', review:'Comida bacana', pub:'Santo bar'},
    {id: '5', user: 'Luiz', review:'Aconchegante', pub:'Bar da Lu'}
]