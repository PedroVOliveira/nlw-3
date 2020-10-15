import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
* {
    margin:0;
    padding:0;
}

body {

    color:#fff;
    background:#f0f0f0;

    &,input,button,textarea {
      font: 600 18px Nunito, sans-serif;
    }
}

`

