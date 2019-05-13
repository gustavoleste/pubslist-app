import React from 'react';
import {Card, Divider} from 'react-native-paper'
import styled from 'styled-components/native'
import {FlatList,View} from 'react-native'

const PubsList = props => (
    <ScreenContainer>
        <FlatList
            data={pubs}
            keyExtractor={ item => item.id}
            renderItem={({item}) => (
                <View>
                    <Card onPress={() => props.navigation.navigate('PubProfile',{item})}>
                        <Card.Title title={item.name} />
                    </Card>
                    <Divider/>
                </View>
            )}
        />
    </ScreenContainer>
)

export default PubsList

const ScreenContainer = styled.View`
    flex: 1;
    background: #e6e6e6;
    padding: 5px;
`

const pubs = [
    {id:'1', name: 'Bar do Joarez', address:'Av. Sto. Amaro 1700'},
    {id:'2', name:'Bar do zé', address:'Av. Sto. Amaro 1885'},
    {id:'3', name: 'Bar da Esquina', address:'Av. Sto. Amaro 2785'},
    {id:'4', name: 'Santo bar', address:'Av. Sto. Amaro 3785'},
    {id:'5', name: 'Bar da Lu', address:'Av. Sto. Amaro 1185'}
]