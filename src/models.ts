export interface Class {
    name: string;
    short: string;
    credits: number
    about: string;

    materials: string;
    password: string;
    site: string;

    year: number;
    semester: number;

    type: number;

    updatedAt: Date;
}

export interface Feedback {
    name: string;
    feedback: string;
    response: string;

    solved: boolean;
    createdAt: Date;
}

export class FeedbackUtil {
    static checkFeedback(feedback: Feedback) {
        if (feedback.name === undefined || feedback.feedback === undefined) {
            return false;
        }

        if (feedback.feedback.length < 10) {
            return false;
        }

        return true;
    }
}