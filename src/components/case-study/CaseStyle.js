import styled from "styled-components";

export const CaseImg = styled.div`
    width: 100%;
    height: 500px;
    background: #ccc;
    margin-top: 40px;
    background-image: url(${props => props.bg});
    background-size: cover;
    background-position: center;
`;

export const Desc = styled.div`
    padding: 20px 0px;
    h3{
        font-weight: 300;
        text-transform: capitalize;
    }
    a{
        color: #575757;
    }
`;