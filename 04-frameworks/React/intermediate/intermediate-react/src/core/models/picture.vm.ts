export interface PictureInfo{
    id: string;
    picUrl: string;
    title: string;
    selected: boolean;
    category: CATEGORIES;
}

export enum CATEGORIES{
  KITTENS='Kittens',
  PUPPIES='Puppies'
}