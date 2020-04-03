import styled from 'styled-components'

/////////////////////////////////

/*
#729EA1 - GREEN SHEEN
#E75A7C - DARK PINK
#B5BD89 - SAGE
#DFBE99 - PALE GOLD
#44bba4 - OCEAN GREEN

*/

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
    background-color: #44bba4;
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
    padding: 10px;
    overflow-y: hidden;
    @media (max-width: 860px) {
        width: auto;
        height: ${props => props.isActive ? 'auto' : '0'};
        overflow-y: hidden;
    }
`;
export const NavLink = styled.div`
    display: block;
    height: 32px;
    background: ${props => props.background || '#fff'};
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
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
export const Logo = styled.a`
    display: block;
    margin: 20px 10px 0 10px;
    padding: 20px;
    background: green;
`;
export const Logout = styled.a`
    display: block;
    margin: 0 10px 20px 10px;
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
    padding: ${props => props.padding || '20px 40px 0 100px'};
    height: ${props => props.height || 'auto'};
    background: ${props => props.background || 'transparent'};
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    @media (max-width: 860px) {
        padding: ${props => props.isResponsive ? '0' : '20px !important'};
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
    min-height: ${props => props.minHeight || 'auto'};
    background: ${props => props.background || 'transparent'};
    justify-content: ${props => props.content || 'flex-start'};
    width: ${props => props.width || 'auto'};
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
    flex-grow: ${props => props.flexGrow || '0'};
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
    background: ${props => props.background || 'transparent'};
    width: ${props => props.width || 'auto'};
    min-height: ${props => props.minHeight || 'auto'};
    @media (max-width: 860px) {
        width: ${props => props.isResponsive ? 'auto' : props.width}
    }
`;
export const Container = styled.div`
    display: block;
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
    background: ${props => props.background || 'transparent'};
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
    @media (max-width: 860px){
        width: ${props => props.isResponsive ? '100%' : `${props.width}`};
    }
`;
export const Box = styled.div`
    background-color: #fff;
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
    flex-grow: ${props => props.flexGrow || '0'};
    width: ${props => `calc(${props.width} - 20px)`|| 'auto'};
    padding: ${props => props.padding || '20px'};
    margin: ${props => props.margin || '10px'};
    border-radius: 10px;
    -webkit-box-shadow: 0 0 1px 0 rgba(59,89,178,.08),0 4px 14px rgba(59,89,178,.06);
    box-shadow: 0 0 1px 0 rgba(59,89,178,.08),0 4px 14px rgba(59,89,178,.06);
    
    @media (max-width: 860px){
        width: ${props => props.isResponsive ? 'auto' : `${props.width}`};
        margin: ${props => props.isResponsive ? '10px' : `${props.margin}`};
    }
`;

//BUTTON
export const Button = styled.button`
	display: inline-block;
    font-weight: 400;
    font-family: Oxygen;
	line-height: 3rem;
	text-align: center;
	vertical-align: middle;
    cursor: pointer;
    color: ${props => props.inverted ? '#44bba4' : '#fff'};
    letter-spacing: 0.5px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	border: 2px solid transparent;
	padding: .5rem 3rem;
	font-size: 1.6rem;
	border-radius: .5rem;
	-webkit-transition: all .2s ease-in-out;
	-o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    -webkit-box-shadow: 0 2px 1px rgba(111,115,128,.3);
    box-shadow: 0 2px 1px rgba(111,115,128,.3);
    outline: 0;
    margin: ${props => props.margin || '0'};
    background-color: ${props => props.inverted ? '#f7faff' : '#44bba4'};    
    &:hover {
        background: #3AA18C;
    }
`;
export const ButtonAction = styled.button`
    display: block;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 0;
    border-radius: 100%;
    background: ${props => props.background || '#44bba4'};
    background-position: center;
    background-repeat: no-repeat;
`;
export const ButtonLink = styled.a`
    display: block;
    width: 44px;
    height: 44px;
    background: ${props => props.background || '#44bba4'};
    background-position: center;
    background-repeat: no-repeat;
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
    margin-bottom: 20px;
    display: block;
    padding: .8rem 1rem;
    font-size: 1.6rem;
    line-height: 3rem;
    color: #4e5159;
    background-color: #fff;
    border: 2px solid #dfe5f2;
    border-radius: .5rem;
    transition: .5s;
    font-family: Oxygen;
    font-weight: 700;
    width: ${props => props.width || 'auto'};
    &::placeholder {
        color: #D2D6DE;
        opacity: 1;
    }
    &:focus {
        border: 2px solid blue;
    }
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
    color: #333;
    margin: ${props => props.margin || '0'};
    font-family: Oxygen;
    font-size: 6.103515625em;
    line-height: 6rem;
    font-weight: 700;
    font-style: normal;
    letter-spacing: -0.04em;
`;
export const H2 = styled.h2`
    color: #333;
    margin: ${props => props.margin || '0'};
    font-family: Oxygen;
    font-size: 4.8828125em;
    line-height: 6rem;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 0em;
`;
export const H3 = styled.h3`
    color: #333;
    margin: ${props => props.margin || '0'};
    font-family: Oxygen;
    font-size: 3.90625em;
    line-height: 6rem;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 0em;
`;
export const H4 = styled.h4`
    color: #333;
    margin: ${props => props.margin || '0'};
    font-family: Oxygen;
    font-size: 3.125em;
    line-height: 6rem;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 0em;
`;
export const H5 = styled.h5`
    color: #333;
    margin: ${props => props.margin || '0'};   
    font-family: Oxygen;
    font-size: 2.5em;
    line-height: 3rem;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 0em;
`;
export const H6 = styled.h6`
    color: #333;
    margin: ${props => props.margin || '0'};   
    font-family: Oxygen;
    font-size: 2em;
    line-height: 3rem;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 0em;
`;
export const H7 = styled.h6`
    color: #333;
    margin: ${props => props.margin || '0'}; 
    font-family: Oxygen;
    font-size: 1.8em;
    line-height: 3rem;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 0em;
`;
export const P = styled.p`
    color: #666;
    margin: ${props => props.margin || '0'};
    font-family: ABeeZee;
    font-size: 1.6em;
    line-height: 3rem;
    font-weight: 400;
    font-style: ${props => props.fontStyle || 'normal'};
    letter-spacing: 0em;
`;
export const PB = styled(P)`
    color: #333;
    font-family: Oxygen;
    font-weight: 700;
`;
export const Info = styled(P)`
    font-size: 1.4em;
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: 0;
`;
//MORE
export const Avatar = styled.div`
    height: 105px;
    width: 105px;
    margin: ${props => props.margin || '0'};
    background-color: #fff;
    border-radius: 100%;
    -webkit-box-shadow: 0 0 1px 0 rgba(59,89,178,.08),0 4px 14px rgba(59,89,178,.06);
    box-shadow: 0 0 1px 0 rgba(59,89,178,.08),0 4px 14px rgba(59,89,178,.06);
`;
export const Alert = styled.div`
    display: ${props => props.alert ? "block" : "none"};
    position: fixed;
    z-index: 9999;
    padding: 10px 20px;
    color: #ffffff;
    background: ${props => props.statusAlert ? '#44bba4' : '#d1345b'};
    border-radius: 10px;
    right: 10px;
    top: 10px;
    font-family: ABeeZee;
    font-size: 1.6em;
    line-height: 3rem;
    font-weight: 400;
    letter-spacing: 0em;
    @media (max-width: 860px) {
        top: auto;
        right: 0;
        bottom: 0;
        width: 100%;
        border-radius: 0;
    }
`;
export const IconLoading = styled.div`
    width: 50px;
    height: 50px;
    background: url('/img/panel/loading.gif');
    background-repeat: no-repeat;
    background-size: 100%;
`;
export const Pre = styled.pre`
    flex-grow: 1;
    overflow-x: auto;
    font-family: ABeeZee;
    font-size: 1.6em;
    line-height: 2rem;
    color: #333;
    font-weight: 400;
    @media  (max-width: 860px) {
        margin: 0 0 20px 0;
        padding: 0 0 10px 0;
    }
`;
export const CenterY = styled(Button)`
    align-self: center;
`;
export const Ocult = styled.div`
    height: ${props => props.height || '32px'};
    width: ${props => props.width || 'auto'};
    margin: ${props => props.margin || '0'};
    background: ${props => props.background || 'transparent'};
`;
