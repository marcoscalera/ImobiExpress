import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --primary-color: #F7F9FC;
        --secondary-color: #15181C;
        --gray: #D9D9D9;
        --blue: #4766FF;
        --white: #FFF;
    }

    body {
        background-color: var(--primary-color);
        color: var(--secondary-color);
        font-family: 'Dosis', sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
    }

    ul{list-style-type: none;}
    a {text-decoration: none;}

`