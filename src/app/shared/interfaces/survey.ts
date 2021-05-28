export interface Survey {
    id: number;
    question: string;
    status: string;
    isOpen: boolean;
    closed_day: any;
    responses_count: number;
}
