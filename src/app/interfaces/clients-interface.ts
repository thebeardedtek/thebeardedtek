namespace ClientsModel{
    export interface ClientsInterface {
        clientEmail: string;
        clientPassword: string;
        clientType: string;
        clientAccountNum: number;
        stripeId?: string;
        clientFirstName: string;
        clientLastName: string;
        clientMiddleName: string;
        clientPhone1: string;
        clientPhone2: string;
        enableFacebook: boolean;
        enableInstagram: boolean;
        enableTwitter: boolean;
        facebookHandle: string;
        instagramHandle: string;
        linkedinHandle: string;
        twitterHandle: string;
        clientAvatar?: string;
        profileDocReference: string;
        lastSignIn: string;
        projects: any[];
        courses?: any[];
        clientCourses: any;
        active: any;
    }
}
 

