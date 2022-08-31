import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    align-items: center;
    justify-content: center;
`


export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color:  ${({ theme }) => theme.colors.black};
    font-size: ${RFValue(20)}px;
    line-height: ${RFValue(24)}px;
`

export const Block = styled.View`
    height: ${RFValue(220)}px;
    width: ${RFValue(250)}px;
    border-radius: ${RFValue(30)}px;
    padding: ${RFValue(45)}px ${RFValue(20)}px;
    background-color: ${({ theme }) => theme.colors.shape};
    align-items: center;
    margin-top: 30px;
`;

export const Img = styled.Image``;

export const Content = styled.View`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`

export const TempContent = styled.View`
    flex-direction: row;    
    align-items: center;
    justify-content: center;
    width: 50%;
`

export const CelciusText = styled.Text`
    position: relative;
    bottom: ${RFValue(20)};
`


export const Temp = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${RFValue(64)}px;        
`;

export const DescriptionAndMinMax = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
`;

export const Description = styled.View`
    background: rgba(212, 66, 111, 0.5);
    border-radius: 20px;
    padding: 5px;
    width: ${RFValue(50)}px;
    align-items: center;
    width: 100%;
`;
export const MinMax = styled.View`
    background: rgba(106, 117, 186, 0.5);
    border-radius: 20px;
    padding: 5px;
`;

export const TextMinMax = styled.Text`
   color: ${({ theme }) => theme.colors.secondary};
   font-size: ${RFValue(10)}px;
`;


export const Day = styled.Text`
    font-size: ${RFValue(12)}px;       
    color: ${({ theme }) => theme.colors.text};
    margin-top: ${RFValue(20)}px;
`

export const Info = styled.View`
    flex-direction: row;
    align-items: center;
    width: 70%;
    justify-content: space-between;
    margin-top: ${RFValue(20)}px;
`;

export const TextInfo = styled.Text`
    font-size: ${RFValue(16)}px;    
    color: ${({ theme }) => theme.colors.secondary};
    margin-left: ${RFValue(15)}px;
`