export class Users {

    id: string;
    name: string;
    email: string;

}

export class Parcs {

    id: string;
    name: string;
    description: string;
    
}

export class Bookings {

    id: string;
    user: string;
    parc: string;
    bookingdate: Date;
    comments: string;

}
