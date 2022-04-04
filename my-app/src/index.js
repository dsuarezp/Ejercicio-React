import * as ReactDOMClient from 'react-dom/client';
import Museums from './museums';
import Artworks from './artworks';

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(<Museums/>);
//root.render(<Artworks/>);