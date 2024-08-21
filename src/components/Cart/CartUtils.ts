import data from '../../assets/data.json';

type Product = {
    id: number;
    name: string;
};

export const flattenAndMapData = (): Map<number, Product> => {
    const flattenedData = Object.values(data).flatMap(items => items);
    return new Map(flattenedData.map(item => [item.id, item]));
};

// There should be a fake call to "send" data via https then get a responce. It will show real information sending capabilities.