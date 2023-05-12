import React, {
    startTransition,
    useDeferredValue,
    useId,
    useMemo,
    useState,
    useTransition,
} from "react";
import TeacherList from "./TeacherList";
import arrayTeacher from "./arrayList.json";
export default function UseTransition() {
    const id = useId();
    const [searchInput, setSearchInput] = useState("");
    // const [filterText, setFilterText] = useState("");
    // const [isLoading, startTransition] = useTransition();
    const deferedValue = useDeferredValue(searchInput)
    const teacherList = useMemo(() => {
        return arrayTeacher.map((teacher) => {
            const index = teacher.toLocaleLowerCase().indexOf(deferedValue);
            return index === -1 ? (
                <p>{teacher}</p>
            ) : (
                <p>
                    {teacher.slice(0, index)}
                    <span style={{ backgroundColor: "yellow" }}>
                        {teacher.slice(index, deferedValue.length)}
                    </span>
                    {teacher.slice(index + deferedValue.length)}
                </p>
            );
        });
    }, [deferedValue]);
    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);

        // startTransition(() => {
        //     setFilterText(e.target.value);
        // });
    };

    return (
        <>
            <div style={{ position: "fixed", top: "50px" }}>
                <h3>FORM</h3>
                <label htmlFor={id}>Search name: </label>
                <input
                    type="text"
                    name="name"
                    id={id}
                    value={searchInput}
                    onChange={handleSearchInputChange}
                />
            </div>

            {/* {isLoading ? <p>Loading...</p> : <TeacherList data={teacherList} />} */}
            <TeacherList data={teacherList} />
        </>
    );
}
