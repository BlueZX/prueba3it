import styled from "@emotion/native";

export const Divider = styled.View(props => ({
  height: 1,
  width: '100%',
  backgroundColor: props.theme.border,
}))

export const Card = styled.View(props => ({
  flexDirection: 'row',
  justifyContent:'space-between',
  align: 'center',
  alignItems: 'center',
  width: '100%'
}))

export const RightSide = styled.View(props => ({
  flexDirection: 'row',
  justifyContent:'flex-end',
  align: 'center',
  alignItems: 'center',
  alignContent: 'center',
}))

export const LeftSide = styled.View(props => ({
  flexDirection: 'column',
  justifyContent:'center',
  align: 'center',
  marginLeft: 10,
}))

export const Title = styled.Text(({ theme }) => ({
  marginBottom: 6,
  fontSize: 18,
  fontWeight: 'bold',
  color: theme.text,
}))

export const SubTitle = styled.Text(({ theme }) => ({
  marginBottom: 5,
  fontSize: 14,
  color: theme.primary,
}))