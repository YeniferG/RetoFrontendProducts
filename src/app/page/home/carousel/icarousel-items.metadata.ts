export interface ICarouselItem{
    id: string;
    title?: {
        first: string;
        second: string;
    };
    subtitle?: string;
    link?: string;
    image?: string;
    order?: number;
    position?: number;
    marginLeft?: number;
}