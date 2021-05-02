export interface Video{
    id: number;
    title: string;
    url: string;
    uploaded: boolean;
    publish: boolean;
    showComments: boolean;
    comments: any;
    [key: string]: any;
}
