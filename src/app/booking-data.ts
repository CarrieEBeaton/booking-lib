import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';

export class BookingData implements InMemoryDbService {

    createDb() {
        const bookings: Booking[] = [
            {
                'id': 1,
                'name': 'Kate Wedding',
                'guests': 23,
                'guestrooms': 12,
                'nights': 2,
                'property': {
                    Id: '123',
                    Name: 'Independent Hotel'
                }
            },
            {
                'id': 2,
                'name': 'Amadeus Conference',
                'guests': 20,
                'guestrooms': 20,
                'nights': 1,
                'property': {
                    Id: '123',
                    Name: 'Independent Hotel'
                }
            },
            {
                'id': 3,
                'name': 'William',
                'guests': 3,
                'guestrooms': 1,
                'nights': 3,
                'property': {
                    Id: '123',
                    Name: 'Independent Hotel'
                }
            },
            {
                'id': 4,
                'name': 'David',
                'guests': 4,
                'guestrooms': 1,
                'nights': 2,
                'property': {
                    Id: '123',
                    Name: 'Independent Hotel'
                }
            },
            {
                'id': 5,
                'name': 'Lillian',
                'guests': 3,
                'guestrooms': 1,
                'nights': 4,
                'property': {
                    Id: '123',
                    Name: 'Independent Hotel'
                }
            }
        ];

        return { bookings };
    }
}
