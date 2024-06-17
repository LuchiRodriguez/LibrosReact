import { useEffect, useState } from 'react';
import { getBooks } from '../app/api';

const Read = () => {
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        getBooks().then(guests => {
            setGuests(guests.data);
        });
    }, []);

    return (
        <div>
            <h1>Read</h1>
            <div>
                {
                    guests.map(guest => <p key={guest.id}>{guest.id} - {guest.nombre}</p>)
                }
            </div>
        </div>
    )
}

export default Read;
