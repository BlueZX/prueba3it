import React from 'react'
import { FlatList, View } from 'react-native'
import { FlatListContainer } from '../Container'
import IndicationItem, { ItemData } from './IndicationItem'
import { Divider } from './styles'

type IndicationListProps = {
  handleLeftNavigation: (item: ItemData) => void
  handleRightNavigation: (item: ItemData) => void
  data: ItemData[]
}

const IndicationList:React.FC<IndicationListProps> = ({ data, handleLeftNavigation, handleRightNavigation }) => {
  return (
    <FlatListContainer>
      <View>
        <FlatList
          data={data} 
          ItemSeparatorComponent={Divider}
          renderItem={({ item }) => <IndicationItem 
            data={item} 
            handleLeftNavigation={handleLeftNavigation} 
            handleRightNavigation={handleRightNavigation} 
            />
          }
          keyExtractor={item => `${item.id}`}
        />
      </View>
    </FlatListContainer>
  )
}

export default IndicationList