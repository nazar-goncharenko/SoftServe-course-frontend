export interface SportCategory {
    id: number;
    name: string;
    description: string;
    children: Array<SportCategory>;

    // parent: number;
    // or
    [key: string]: any;
}
