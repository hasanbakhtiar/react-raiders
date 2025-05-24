import axios from 'axios';
import React, { useRef } from 'react'

const AddProduct = () => {
    const titleRef = useRef<HTMLInputElement | null>(null);
    const formSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('http://localhost:3010/ad/product', {
            "titleAz": titleRef.current!.value,
            "img": [],

        }, {
            headers: {
                "matrix-access": "3fa3afc2aa0e5e2c1c17ee83f4c8fc76",
                "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODMxYjhjMDhjY2ZmZDU0Zjc4MjhmNmMiLCJuYW1lIjoiSGFzYW4iLCJzdXJuYW1lIjoiQmFraHRpYXIiLCJlbWFpbCI6Imhhc2FuYmFrQHdlYmx1bmEub3JnIiwicGhvbmUiOiI5OTk5OTk5Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ4MDg5NzU3fQ.Ads0hDesFDSe2naWFdbNIfrL80U1BNR_ixtgfWoVQvA"
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }
    return (
        <form onSubmit={formSubmit}>
            <input type="text" ref={titleRef} />
            <button>create</button>
        </form>
    )
}

export default AddProduct