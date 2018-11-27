

/* Defines the booking entity */
export interface Booking {
    id?: number;
    name: string;
    guests?: number;
    guestrooms?: number;
    nights?: number;
    property?: NameIdPair;
    // Account?: NameIdPair;
}

export interface NameIdPair {
    Id: string;
    Name: string;
}
