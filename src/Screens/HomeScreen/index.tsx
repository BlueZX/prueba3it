import React from 'react'
import { ActivityIndicator } from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useTheme } from '@emotion/react'

import { RootStackParamList } from "../../Navigation/Stacks"
import IndicationList from '../../Components/IndicationList'
import { ItemData } from '../../Components/IndicationList/IndicationItem'
import usePermissionsCamera from '../../Hooks/usePermissionsCamera'
import { Container } from '../../Components/Container'
import { ButtonContainer, ButtonText, PermissionsText } from './styles'

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Indicadores'>

const indications = [
  {id:1, name: 'Dolar', convert: 'Pesos'}, 
  {id:2, name: 'Euro', convert: 'Pesos'}, 
  {id:3, name: 'IPC', convert: 'Porcentaje'}, 
  {id:4, name: 'UF', convert: 'Pesos'}, 
  {id:5, name: 'UTM', convert: 'Pesos'}
];

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const theme = useTheme()
  const { permissionStatus, requestCameraPermission, isLoading } = usePermissionsCamera();

  const handleRightNavigation = (item: ItemData):void =>  {
    console.log(item);
    navigation.navigate('DetailScreen', { title: item.name, convertUnit: item.convert });
  }

  const handleLeftNavigation = (item: ItemData):void =>  {
    console.log(item);
    navigation.navigate('ListDetailScreen', { title: item.name, convertUnit: item.convert });
  }

  if(permissionStatus !== 'granted') return (
    <Container>
      {isLoading ? (
        <ActivityIndicator color={theme.primary} />
      ) : (
      <React.Fragment>
        <PermissionsText>para ver el contenido debes darle permiso a la app</PermissionsText>
        <ButtonContainer onPress={requestCameraPermission}>
          <ButtonText>Solicitar permiso</ButtonText>
        </ButtonContainer>
      </React.Fragment>
      )}
    </Container>
  );

  return (
    <React.Fragment>
      <IndicationList 
        data={indications} 
        handleLeftNavigation={handleLeftNavigation} 
        handleRightNavigation={handleRightNavigation}
      />
    </React.Fragment>
  )
}

export default HomeScreen