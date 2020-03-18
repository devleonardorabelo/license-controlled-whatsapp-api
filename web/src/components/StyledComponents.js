import styled from 'styled-components'

/////////////////////////////////
export const Nav = styled.nav`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    height: 100vh;
    padding: 20px;
    background-color: pink;
    @media (max-width: 860px) {
        position: static;
        height: auto;
        overflow-y: hidden;
        width: auto;
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
    overflow-y: hidden;
    @media (max-width: 860px) {
        width: auto;
        height: ${props => props.isActive ? 'auto' : '0'};
        overflow-y: hidden;
    }
`;
export const NavLink = styled.div`
    display: block;
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
export const Logout = styled.div`
    display: block;
    padding: 20px;
    background: green;
    border:0;
    span {
        display: none;
        @media (max-width: 860px) {
            display: block;
        }
    }
    @media (min-width: 860px) {
        display: ${props => props.noResponsive ? 'block' : 'none'};
    }
    @media (max-width: 860px) {
        display: ${props => props.isResponsive ? 'block' : 'none'};
        margin-bottom: 20px;
    }
`;

export const Main = styled.main`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 20px 40px 0 100px;
    height: ${props => props.height || 'auto'};
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
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
    background: pink;
    justify-content: ${props => props.content || 'flex-start'};
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
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
    background: magenta;
`;
export const Container = styled.div`
    display: block;
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
    background: orange;
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
    @media (max-width: 860px){
        width: ${props => props.isResponsive ? '100%' : `${props.width}`};
    }
`;
export const Box = styled.div`
    background-color: #fcfcfc;
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: ${props => props.grow || '1'};
    padding: ${props => props.padding || '20px'};
    margin: ${props => props.margin || '20px 10px'};
`;
export const CustomBox = styled.div`
    padding: ${props => props.padding || '20px'};
    margin: ${props => props.margin || '10px'};
    width: ${props => `calc(${props.width} - ${props.margin})`}
`;
//BUTTON
export const ButtonNmf = styled.div`
    display: block;
    height: 40px;
    width: 40px;
    background: black;
`;
export const ButtonAction = styled.button`
    padding: 15px;
    font-size: 1em;
    border: 0;
    width: ${props => props.width || 'auto'};
    margin-bottom: 20px;
    background: red;
`;
export const Burger = styled.button`
    padding: 20px;
    border: 0;
    background: green;
    @media (min-width: 861px) {
        display: none;
    }
`;
export const Input = styled.input`
    padding: 15px;
    font-size: 1em;
    width: 100%;
    margin-bottom: 20px;
`;
export const LinkAction = styled.div`
    display: block;
    padding: 15px;
    font-size: 1em;
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
`;
//TYPOGRAPHY
export const H1 = styled.h1`
    font-size: 3em;
    margin: ${props => props.margin || '0'};
`;
export const H2 = styled.h2`
    font-size: 2em;
    margin: ${props => props.margin || '0'};
`;
export const H3 = styled.h3`
    font-size: 1.5em;
    margin: ${props => props.margin || '0'};
`;
export const H5 = styled.h5`
    font-size: 1.3em;
    margin: ${props => props.margin || '0'};
`;
export const P = styled.p`
    font-size: 1.2em;
    margin: ${props => props.margin || '0'};
`;
//MORE
export const Avatar = styled.div`
    height: 150px;
    width: 150px;
    background-color: red;
`;