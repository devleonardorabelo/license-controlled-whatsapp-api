import styled from 'styled-components'

//Structure

export const Row = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 20px;
    @media (max-width: 860px) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-sizing: content-box;
                box-sizing: content-box;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
            -ms-flex-direction: row;
                flex-direction: row;
    }
`;

export const RowNmf = styled(Row)`
    background-color: #f6f6f6;
    -webkit-box-shadow: 4px 4px 9px #d9d9d9, 
    -4px -4px 9px #ffffff;
    box-shadow: 4px 4px 9px #d9d9d9, 
    -4px -4px 9px #ffffff;
`;
export const RowEnd = styled(Row)`
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 0px !important;
`;
export const RowToColumn = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    @media (max-width: 860px) {
        -webkit-box-orient: vertical !important;
        -webkit-box-direction: normal !important;
        -ms-flex-direction: column !important;
        flex-direction: column !important;
    }
`;
export const BodyRow = styled(RowToColumn)`
    background: #f6f6f6;
    min-height: 100vh;
    font-family: Segoe UI !important;
`;
export const Column = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 20px;
`;
export const Container1 = styled.div`
    width: 100%;
`;
export const Container2 = styled.div`
    width: 50%;
    padding: 20px;
    @media (max-width: 860px){
        width: 100% !important;
    }
`;
export const Grow1 = styled.div`
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding-left: 20px;
`;
export const NavHeader = styled.div`
    display: none;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin: 20px;
    @media (max-width: 860px) {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
    }
`;

export const NavItem = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 100%;
    margin-bottom: 20px;
    background-color: #f6f6f6;
    color: #333;
    -webkit-box-shadow: 4px 4px 9px #d9d9d9, 
   -4px -4px 9px #ffffff;
    box-shadow: 4px 4px 9px #d9d9d9, 
   -4px -4px 9px #ffffff;
    @media (max-width: 860px) {
        display: block;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        height: 60px !important;
        width: 100% !important;
        border-radius: 10px !important;
    }
`;
export const ItemMessage = styled(NavItem)`
    background: url("/img/message.svg") no-repeat center;
    @media (max-width: 860px){
        background-position: 20px center !important;
    }
`;
export const ItemContact = styled(NavItem)`
    background: url("/img/contact.svg") no-repeat center;
    @media (max-width: 860px){
        background-position: 20px center !important;
    }
`;
export const Item = styled.span`
    display: none;
    @media (max-width: 860px) {
        padding: 20px 0 20px 60px;
        display: block !important;
    }
`;
export const Main = styled.main`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
`;
//Buttons, Inputs and Icons

export const SearchBox = styled.form`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 5px;
    border-radius: 10px;
    background-color: #f6f6f6;
    -webkit-box-shadow: 4px 4px 9px #d9d9d9, 
   -4px -4px 9px #ffffff;
    box-shadow: 4px 4px 9px #d9d9d9, 
   -4px -4px 9px #ffffff;
`;
export const InputText = styled.input`
    font-size: 12pt;
    padding: 0 20px;
    height: 50px;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    border: 0;
    background: transparent;   
`;
export const Button = styled.button`
    height: 50px;
    width: 50px;
    border: 0;
`;
export const ButtonReset = styled(Button)`
    background: transparent url("/img/delete.svg") center no-repeat;
`;
export const ButtonSearch = styled(Button)`
    background: transparent url("/img/search.svg") center no-repeat;   
`;
export const ButtonAction = styled(Button)`
    border-radius: 100%;
    background-color: #f6f6f6;
    -webkit-box-shadow: 4px 4px 9px #d9d9d9, 
    -4px -4px 9px #ffffff;
    box-shadow: 4px 4px 9px #d9d9d9, 
    -4px -4px 9px #ffffff;
    margin-left: 20px;
`;
export const ButtonBurger = styled(Button)`
    -ms-flex-item-align: end;
    align-self: flex-end;
    background: transparent url("/img/burger.svg") center no-repeat;
    background-size: 30px;
    border: 0;
    -webkit-box-shadow: 4px 4px 9px #d9d9d9, 
    -4px -4px 9px #ffffff;
    box-shadow: 4px 4px 9px #d9d9d9, 
    -4px -4px 9px #ffffff;
    margin-left: 20px;
`;
export const Icon = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 10px;
`;
export const IconNmf = styled(Icon)`
    background-color: #f6f6f6;
    -webkit-box-shadow: 4px 4px 9px #d9d9d9, 
    -4px -4px 9px #ffffff;
    box-shadow: 4px 4px 9px #d9d9d9, 
    -4px -4px 9px #ffffff;
`;

//Titles and Texts

export const Title1 = styled.h1`
    font-size: 2em;
    margin-top: -12px;
`;
export const Title2 = styled.h2`
    font-size: 1.6em;
    font-weight: 400;
    color: #a9a9a9;
`;
export const Title3 = styled.h3`
    font-size: 1.2em;
    font-weight: 600;
`;
export const Text = styled.p`
    font-size: 1em;
    font-weigth: 300;
`;

//More

export const ResponsiveLogo = styled.div`
    height: 45px;
    width: 45px;
    background: url("/img/logo-icon.svg") no-repeat center;
    background-size: 100%;
`;
export const FullLogo = styled.div`
    @media (max-width: 860px) {
        display: none;
    }
`;