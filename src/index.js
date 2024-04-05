import React from 'react'
import ReactDOM from 'react-dom/client';
import './styles.css'
import { App } from './App'

const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970) },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430) },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) },
  // Left
  { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(327482) },
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: pexel(325185) },
  { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(358574) },
  // Right
  { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(227675) },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(911738) },
  { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986) }
]

// createRoot(document.getElementById('root')).render(<App images={images} />)

// Microfrontend hecho a partir del tutorial:
// https://tekinico.medium.com/build-a-react-embeddable-widget-c46b7f7999d8
// https://github.com/nicoraynaud/react-widget

// Find all widget divs
const widgetDivs = document.querySelectorAll('.sepinaco-gallery-webcomponent, #sepinaco-gallery-webcomponent');

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
  console.log("Sepinaco Gallery WebComponent Debug mode: ", debug);

  // Show logs if debug is true
  if(debug) {
    console.log(itemsString);
    console.log(items);
  }

  root.render(
    <React.StrictMode>
      <App images={items} />
      {/* <App images={images} /> */}
    </React.StrictMode>
  );
});
