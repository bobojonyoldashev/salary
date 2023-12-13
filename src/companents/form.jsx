import { useState } from "react";

const FormPage = () => {
    const [info, setInfo] = useState({
        username: "Shohjahon",
        surname: "Shonazarov",
    });
    // const handlyChange = (e) => {
    //     setInfo({ username: e.target.value, ...info });
    // };

    return (
        <div className='container' style={{ marginBlock: "120px" }}>
            <form action=''>
                <div>
                    <label htmlFor='id'>Username:</label>
                    <input
                        type='text'
                        onChange={(e) => {
                            setInfo({ ...info, username: e.target.value });
                        }}
                        defaultValue={info.username}
                    />
                </div>
                <div>
                    <label htmlFor='id'>Surname:</label>
                    <input
                        type='text'
                        onChange={(e) => {
                            setInfo({...info,surname:e.target.value})
                        }}
                        defaultValue={info.surname}
                    />
                </div>
            </form>

            <p>
                username:{info.username} surname:{info.surname}
            </p>
        </div>
    );
};

export default FormPage;
