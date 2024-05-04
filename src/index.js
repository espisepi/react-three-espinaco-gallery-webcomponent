import React from 'react'
import ReactDOM from 'react-dom/client';
import './styles.css'
import { App } from './webcomponents/gallery/App'


// Microfrontend hecho a partir del tutorial:
// https://tekinico.medium.com/build-a-react-embeddable-widget-c46b7f7999d8
// https://github.com/nicoraynaud/react-widget

const WEBCOMPONENT_QUERY_SELECTOR_NAME = 'sepinaco-gallery-webcomponent';

// Find all widget divs
const widgetDivs = document.querySelectorAll(`.${WEBCOMPONENT_QUERY_SELECTOR_NAME}, #${WEBCOMPONENT_QUERY_SELECTOR_NAME}`);

// Inject our React App into each class
widgetDivs.forEach(div => {
  const root = ReactDOM.createRoot(div);

  // get data-items attribute ==================
  const itemsString = div?.dataset?.items;
  const items = JSON.parse(itemsString);
  // Convert String "[0,0,0]" => Array [0,0,0]
  items.forEach(item => {
    item.position = JSON.parse(item.position);
    item.rotation = JSON.parse(item.rotation);
  });

  // get data-debug attribute ==================
  const debugString = div?.dataset?.debug;
  const debug = debugString === "true";
  console.log(WEBCOMPONENT_QUERY_SELECTOR_NAME + " Debug mode: ", debug);

  // Show logs if debug is true
  if(debug) {
    console.log(itemsString);
    console.log(items);
  }

  root.render(
    <React.StrictMode>
      <App items={items} />
    </React.StrictMode>
  );
});
