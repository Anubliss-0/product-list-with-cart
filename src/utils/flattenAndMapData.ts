import data from '../data.json';

type Product = {
    id: number;
    name: string;
    price: number;
    section: string;
    image: {
        thumbnail: string;
    };
};

export const flattenAndMapData = (): Map<number, Product> => {
    const flattenedData = Object.entries(data).flatMap(([section, items]) => 
        items.map(item => ({ ...item, section }))
    );

    return new Map(flattenedData.map(item => [item.id, item]));
};
