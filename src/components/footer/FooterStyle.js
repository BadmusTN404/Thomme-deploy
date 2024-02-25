import styled from "styled-components";

export const FootWrapper = styled.div`
    background: #000;
    margin-top: -4px;
    color: #dedede;
    p{
        color: #787878;
    }
`;

export const FootRow = styled.div`
    display: flex;
    padding: 50px 0px;
    border-bottom: 1px solid #303030;
    cursor: pointer;
    .col1{
        flex: 1;
    }
    .col2{
        flex: 2;
        display: flex;
        >div{
            flex: 1;
        }
        h4{
            font-size: 20px;
            color: #dedede;
            font-weight: 500;
        }
        ul{
            padding: 0px;
            list-style-type: none;
            color: #787878;
        }
        li{
            padding: 6px 0px;
        }

    }
    @media (max-width:768px) {
        flex-direction: column ;
        .col2{
            flex-direction: column;
        }
    }
`;

export const FooterSocial = styled.div ` 
    padding: 88px 0px;
`;

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px; 
`;
export const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;

export const SocialIconWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 40px;
`;

export const Social = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    justify-content:center;
    align-items: center;
    border: 1px solid #787878;
    color: #787878;
    cursor: pointer;
`;

