import styled from 'styled-components'

/////////////////////////////////
export const Nav = styled.nav`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    height: 100vh;
    padding: 20px;
    @media (max-width: 860px) {
        height: auto;
        overflow-y: hidden;
        width: auto;
        background-color: pink;
        padding: 20px 20px 0 20px;
    }
`;
export const NavResponsive = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    @media (max-width: 860px) {
        margin-bottom: 20px;
    }
`;

export const NavItem = styled.div`
    width: auto;
    height: 0;
    overflow-y: hidden;
    @media (max-width: 860px) {
        width: auto;
        height: 0;
        overflow-y: hidden;
    }
`;
export const NavLink = styled.div`
    padding: 20px;
    background: red;
    margin-bottom: 20px;
    span{
        display: none;
        @media (max-width: 860px){
            display: block;
        }  
    }
    @media (max-width: 860px) {
        width: auto;
    }
`;
export const Logo = styled.div`
    padding: 20px;
    background: green;
`;
export const Logout = styled.button`
    display: none;
    span {
        display: none;
        @media (max-width: 860px) {
            display: block;
        }
    }
    @media (max-width: 860px) {
        display: block;
        margin-bottom: 20px;
    }
`;
export const Main = styled.main`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 20px 40px;
    background: green;
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    @media (max-width: 860px) {
        padding: 20px !important;
    }
`;
export const Row = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -ms-flex-wrap: ${props => props.wrap || 'nowrap'};
        flex-wrap: ${props => props.wrap || 'nowrap'};
    padding: ${props => props.padding || '20px'};
    margin: ${props => props.margin || 'auto'};
    background: pink;
    @media (max-width: 860px) {
        -webkit-box-orient: vertical !important;
        -webkit-box-direction: normal !important;
        -ms-flex-direction: column !important;
        flex-direction: column !important;
    }
`;
export const Column = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding: ${props => props.padding || '20px'};
    margin: ${props => props.margin || 'auto'};
    background: magenta;
`;
export const Box = styled.div`
    background-color: #fcfcfc;
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: ${props => props.grow || '1'};
    padding: ${props => props.padding || '20px'};
    margin: ${props => props.margin || '10px'};
`;
export const CustomBox = styled.div`
    padding: ${props => props.padding || '20px'};
    margin: ${props => props.margin || '10px'};
    width: ${props => `calc(${props.width} - ${props.margin})`}
`;
export const BoxEnd = styled(Box)`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
`;
//BUTTON
export const ButtonNmf = styled.button`
    height: 40px;
    width: 40px;
    background: black;
`;
export const ButtonAction = styled.button`
    padding: 20px;
    max-width: 150px;
    background: orange;
    height: 60px;  
`;
export const Burger = styled.button`
    padding: 20px;
    background: green;
    @media (min-width: 861px) {
        display: none;
    }
`;
//MORE
export const Avatar = styled.div`
    min-height: 100px;
    min-width: 100px;
    max-height: 250px;
    max-width: 250px;
    height: 20vw;
    width: 20vw;
    background-color: red;
`;