import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  border: 0;
  list-style-type: none;
  text-decoration: none;
}

:root{
    --primary-color :#fff;
    --secondary-color:rgb(112,59,247);
    --black-color : #000;
    --gray-color : gray;
    --box-Shodow :0px 1px 13px rgba(0, 0, 0, 0.1);
}

html{
    font-size: 16px;
    font-family: "Roboto", sans-serif;
}

body{
  max-width: 100%;
    width: 100%;
    font-size: 1rem; /* Base font size */
}
img{
  object-fit: cover;
}
@media screen and (min-width: 768px) {
  body {
    font-size: calc(1rem + 0.5vw);

  }

}
&::-webkit-scrollbar{
		width: 10px;
	}

	&::-webkit-scrollbar-track {
    background: transparent;
}

&::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
}
`;
