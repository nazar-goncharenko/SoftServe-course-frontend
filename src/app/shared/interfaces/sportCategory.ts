export interface SportCategory {
    id: number;
    name: string;
    description: string;
    children: Array<SportCategory>;
    isPredefined: boolean;
    showBanners: boolean;
    // parent: number;
    // or
    [key: string]: any;
}
