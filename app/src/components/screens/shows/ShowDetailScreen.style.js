import styled from "styled-components";
import { media, theme } from "../../../styles/theme/theme";
export const ShowDetailContent = styled.div`
${media.sm`
margin-top:20px;
`}
.detail-block{
    padding:40px;
    background-color:${theme.colors.black10};
    border:1px solid ${theme.colors.black15};
    border-radius:12px;
    margin-bottom:30px;
    &:last-child{
        margin-bottom:0;
    }
    ${media.xxl`
    padding:30px;
    `}
    ${media.xl`
    padding:30px;
    `}
    ${media.lg`
    padding:30px;
    `}
    ${media.sm`
    padding:30px;
    `}
}
`;