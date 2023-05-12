import React, { useEffect, useRef } from 'react'
import Children from './Children'
import { useFetch } from '../../hooks/useFetch';

export default function Parent() {
    const myRef = useRef(123)

    // component cha cập nhât dược biên của component con
    useEffect(() => {
        const user = myRef.current.test();
    }, [])

    const res = useFetch("https://628b9961667aea3a3e32d1c5.mockapi.io/api/productPhone")
    console.log(res);
    return (
        <div>
            <h1>Truyền sự kiện</h1>
            <Children ref={myRef} />
            <br />
            {/* component cha thực hiện sự kiện của component con */}
            <button onClick={() => { myRef.current.submitForm() }}>Login from Parent</button>

        </div>
    )
}
