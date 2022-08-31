import { LinearGradient } from "expo-linear-gradient";
import { Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(LinearGradient)`
    flex:1;
    align-items: center;
`;

export const WrapperInput = styled.View`
    margin-top:  ${Platform.OS === 'ios' ? 70 : 40}px;
    width: 80%;
    margin-bottom: ${Platform.OS === 'ios' ? 20 : 10}px;
`;

export const Loading = styled.Text`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;
