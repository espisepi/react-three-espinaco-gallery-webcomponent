import { GalleryItem, GalleryItemString } from "../types/types"


export const convertToGalleryItems = (itemsString: string | undefined): GalleryItem[] => {

    if(itemsString) {

      let items: GalleryItemString[] = JSON.parse(itemsString);

      const galleryItems: GalleryItem[] = items.map((item: GalleryItemString) => ({
        name: item.name,
        description: item.description,
        price: item.price,
        urlpdp: item.urlpdp,
        position: JSON.parse(item.position), // Convert String "[0,0,0]" => Array [0,0,0]
        rotation: JSON.parse(item.rotation), // Convert String "[0,0,0]" => Array [0,0,0]
        url: item.url
      } as GalleryItem));

      return galleryItems;
    }
    return [];
}