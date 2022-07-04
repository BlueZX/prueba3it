import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../Navigation/Stacks"
import IndicationList from '../../Components/IndicationList'
import { ItemData } from '../../Components/IndicationList/IndicationItem'

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Indicadores'>



const indications = [
  {id:1, name: 'Dolar', convert: 'Pesos'}, 
  {id:2, name: 'Euro', convert: 'Pesos'}, 
  {id:3, name: 'IPC', convert: 'Porcentaje'}, 
  {id:4, name: 'UF', convert: 'Pesos'}, 
  {id:5, name: 'UTM', convert: 'Pesos'}
];
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  const handleRightNavigation = (item: ItemData):void =>  {
    console.log(item);
    navigation.navigate('DetailScreen', { title: item.name, convertUnit: item.convert });
  }

  const handleLeftNavigation = (item: ItemData):void =>  {
    console.log(item);
    navigation.navigate('ListDetailScreen', { title: item.name, convertUnit: item.convert });
  }

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