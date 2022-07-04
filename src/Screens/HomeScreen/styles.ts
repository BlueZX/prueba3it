import styled from "@emotion/native";

export const PermissionsText = styled.Text(({ theme }) => ({
  marginBottom: 17,
  fontSize: 14,
  fontWeight: 'bold',
  color: theme.text,
}))

export const ButtonContainer = styled.TouchableOpacity(({ theme }) => ({
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 12,
  backgroundColor: theme.primary,
}))

export const ButtonText = styled.Text(({ theme }) => ({
  borderRadius: 10,
  fontSize: 18,
  fontWeight: 'bold',
  color: '#FFFFFF',
  alignSelf: "center",
  textTransform: "uppercase"
}))