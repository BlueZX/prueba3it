import React, { useLayoutEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useTheme } from '@emotion/react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import useApiConnect, { IndicatorData } from '../../Hooks/useApiConnect'
import { RootStackParamList } from 'src/Navigation/Stacks'
import { Container, FlatListContainer } from '../../Components/Container'
import { Divider, Card } from '../../Components/IndicationList/styles'
import { DateText, ValueText } from './styles'

export type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'ListDetailScreen'>

type ListItem = {
  indicatiorData: IndicatorData
  convertUnit?: string
}

const ListItem:React.FC<ListItem> = ({ indicatiorData, convertUnit }) => (
  <Card>
    <DateText>{indicatiorData.Fecha}</DateText>
    <ValueText>{convertUnit === 'Pesos' && '$'} {indicatiorData.Valor} {convertUnit === 'Porcentaje' && '%'}</ValueText>
  </Card>
);


const ListDetailScreen: React.FC<DetailScreenProps> = ({ route, navigation }) => {
  const theme = useTheme()
  const [ title ] = useState(route.params.title);
  const [time, setTime] = useState<string|number>(0)
  const { isLoading, data } = useApiConnect(title.toLocaleLowerCase(), time)

  useLayoutEffect(() => {
    if(title !== ''){
      navigation.setOptions({
        title: title,
      });
      if(
        title.toLocaleLowerCase() === 'dolar' ||
        title.toLocaleLowerCase() === 'euro' ||
        title.toLocaleLowerCase() === 'uf'
      )
        setTime(30);
      if(
        title.toLocaleLowerCase() === 'ipc' ||
        title.toLocaleLowerCase() === 'utm'
      )
        setTime('year');
    }
  }, [navigation, title]);

  if( isLoading ) return (
    <Container>
      <ActivityIndicator color={theme.primary} />
    </Container>
  )

  return (
    <FlatListContainer>
      <View>
        <FlatList
          data={data} 
          ItemSeparatorComponent={Divider}
          renderItem={({ item }) => <ListItem indicatiorData={item} convertUnit={route.params.convertUnit} />}
          keyExtractor={item => `${item.Fecha}`}
        />
      </View>
    </FlatListContainer>
  )
}

export default ListDetailScreen