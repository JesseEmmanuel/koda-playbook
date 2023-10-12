export interface DataState {
    loading: boolean;
    error: string | null;
    items: Item[],
    images: Image[],
}

interface Item {
    id: number,
    title: string,
    completed: boolean
}

interface Image {
    albumId: number
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}