import { LinearGradient } from "expo-linear-gradient";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(LinearGradient)`
    flex:1;
    align-items: center;
`;

export const Loading = styled.Text`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

