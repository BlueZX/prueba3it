import React, { useLayoutEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useTheme } from '@emotion/react'
import { ActivityIndicator, Text } from 'react-native'
import useApiConnect from '../../Hooks/useApiConnect'
import { RootStackParamList } from 'src/Navigation/Stacks'
import { Container, DetailContainer } from '../../Components/Container'
import { Price, TodayContainer } from './styles'
import IndicatorGraph from '../../Components/IndicatorGraph'

export type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'DetailScreen'>

const DetailScreen: React.FC<DetailScreenProps> = ({ route, navigation }) => {
  const theme = useTheme()
  const [ title ] = useState(route.params.title);
  const [time, setTime] = useState(0)
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
        setTime(10);
      if(
        title.toLocaleLowerCase() === 'ipc' ||
        title.toLocaleLowerCase() === 'utm'
      )
        setTime(12);
    }
  }, [navigation, title]);

  if( isLoading ) return (
    <Container>
      <ActivityIndicator color={theme.primary} />
    </Container>
  )

  return (
    <DetailContainer>
      <Price>{route.params.convertUnit === 'Pesos' && '$'} {data[data.length - 1].Valor} {route.params.convertUnit === 'Porcentaje' && '%'}</Price>
      <TodayContainer>
        <Text>Nombre:</Text>
        <Text>{title}</Text>
      </TodayContainer>
      <TodayContainer>
        <Text>Fecha:</Text>
        <Text>{data[data.length - 1].Fecha}</Text>
      </TodayContainer>
      <TodayContainer>
        <Text>Unidad de medida:</Text>
        <Text>{route.params.convertUnit}</Text>
      </TodayContainer>
      <IndicatorGraph data={data}/>
    </DetailContainer>
  )
}

export default DetailScreen