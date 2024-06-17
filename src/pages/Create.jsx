import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBook } from "../app/api";

const Create = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');

    return (
        <div>
            <h1>Create</h1>
            <p>
                <input type="text" placeholder='Guest Name' onChange={e => setNombre(e.target.value)} />
                <button onClick={async () => {
                    await createBook({ nombre });
                    navigate('/');
                }}>Create</button>
            </p>
        </div>
    )
}

export default Create;