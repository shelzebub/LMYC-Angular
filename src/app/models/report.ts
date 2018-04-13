import { ClassificationCode } from './classification-code';

export class Report {
    reportID: string;
    content: string;
    hours: number;
    approved: boolean;
    dateCreated: Date;
    userId: string;
    codeId: string;
    description: string;
    classification: ClassificationCode;
    
    constructor() { }
}
