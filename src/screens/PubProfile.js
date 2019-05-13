import React from 'react';
import {List, Card, Divider, Button} from 'react-native-paper'
import styled from 'styled-components/native'
import {FlatList,View} from 'react-native'

const PubProfile = props => (
    <ScreenContainer>        
        <Card>
             <List.Item
                title='Nome:'
                description={props.navigation.state.params.item.name}
            />
            <List.Item
                title='Endereço:'
                description={props.navigation.state.params.item.address}
            />
            <Card.Actions>
                <Button onPress={()=>{}}>Adicionar Review</Button>
            </Card.Actions>         
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
                            title={item.user}
                            description={item.review}
                            onPress={()=>props.navigation.navigate('UserProfile',{item})}
                        />
                        <Divider/>
                    </View>
                )}
            /> 
    </ScreenContainer>
)


export default PubProfile

const ScreenContainer = styled.View`
    flex: 1;
    background: #e6e6e6;
    padding: 5px;
`

const reviews = [
    {id: '1', user: 'Luiz', review:'Ótimo lugar. Bom atendimento'},
    {id: '2', user: 'Gustavo', review:'Ótimo ambiente'},
    {id: '3', user: 'Luiza', review:'Preço justo'},
    {id: '4', user: 'Maria', review:'Comida bacana'},
    {id: '5', user: 'Eduarda', review:'Aconchegante'}
]