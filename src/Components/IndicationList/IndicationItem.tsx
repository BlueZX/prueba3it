import { useTheme } from '@emotion/react'
import React from 'react'
import { Pressable } from 'react-native'
import ChevronRight from 'react-native-bootstrap-icons/icons/chevron-right'
import InfoCicle from 'react-native-bootstrap-icons/icons/info-circle'
import { Card, RightSide, LeftSide, SubTitle, Title } from './styles'

export type ItemData = {
  id: number,
  name: string,
  convert: string,
}

type IndicationItemProps = {
  handleRightNavigation: (item: ItemData) => void
  handleLeftNavigation: (item: ItemData) => void
  data: ItemData
}

const IndicationItem:React.FC<IndicationItemProps> = ({ data, handleLeftNavigation, handleRightNavigation }) => {
  const theme = useTheme()
  return (
    <Card>
      <Pressable onPress={() => handleLeftNavigation(data)}>
        <LeftSide>
          <Title>{data.name}</Title>
          <SubTitle>{data.convert}</SubTitle>
        </LeftSide>
      </Pressable>
      <Pressable onPress={() => handleRightNavigation(data)}>
        <RightSide>
          <InfoCicle width="25" height="17" fill={theme.primary} scaleX={1.3} scaleY={1.3} />
          <ChevronRight width="25" height="17" fill={theme.border} scaleX={1.3} scaleY={1.3} />
        </RightSide>
      </Pressable>
    </Card>
  )
}

export default IndicationItem