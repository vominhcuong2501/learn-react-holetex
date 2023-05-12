import React from "react";

export default function TeacherList(data) {
    return (
        <>
            <h3>Student List</h3>
            <div>
                {data.data.map((teacher) => {
                    return <p>{teacher}</p>;
                })}
            </div>
        </>
    );
}
