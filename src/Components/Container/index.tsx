import styled from '@emotion/native'

export const Container = styled.SafeAreaView(props => ({
  flex: 1,
  backgroundColor: props.theme.background,
  alignItems: 'center',
  justifyContent: 'center',
}))

export const FlatListContainer = styled(Container)({
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  paddingHorizontal: 7,
  paddingVertical: 5
})

export const DetailContainer = styled(Container)({
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingHorizontal: 7,
  paddingVertical: 5
})