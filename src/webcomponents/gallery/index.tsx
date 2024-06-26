import React from 'react'
import ReactDOM from 'react-dom/client';
import { App } from './app/App'
import { convertToGalleryItems } from './converters/galleryItemsConverter';


// Microfrontend hecho a partir del tutorial:
// https://tekinico.medium.com/build-a-react-embeddable-widget-c46b7f7999d8
// https://github.com/nicoraynaud/react-widget


export const createGalleryWebcomponent = () => {
  const WEBCOMPONENT_QUERY_SELECTOR_NAME = 'sepinaco-gallery-webcomponent';

  // Find all widget divs
  const widgetDivs:NodeListOf<HTMLElement> = document.querySelectorAll(`.${WEBCOMPONENT_QUERY_SELECTOR_NAME}, #${WEBCOMPONENT_QUERY_SELECTOR_NAME}`);
  
  // Inject our React App into each class
  widgetDivs.forEach(div => {
    const root = ReactDOM.createRoot(div);

    // get data-debug attribute ==================
    const debugString = div?.dataset?.debug;
    const debug = debugString === "true";
    console.log(WEBCOMPONENT_QUERY_SELECTOR_NAME + " Debug mode: ", debug);
  
    // get data-items attribute ==================
    const itemsString: string | undefined = div?.dataset?.items;
    const items = convertToGalleryItems(itemsString)

    // Show logs if debug is true
    if(debug) {
      console.log({itemsString});
      console.log({items});
    }

    root.render(
      <React.StrictMode>
        <App items={items} />
      </React.StrictMode>
    );
  });
  
}

