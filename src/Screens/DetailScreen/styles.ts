import styled from "@emotion/native";

export const Price = styled.Text(({ theme }) => ({
  marginBottom: 5,
  fontSize: 28,
  fontWeight: 'bold',
  color: theme.primary,
}))

export const TodayContainer = styled.View(props => ({
  flexDirection: 'row',
  justifyContent:'space-between',
  align: 'center',
  alignItems: 'center',
  width: '80%',
}))