import { NavLink, Route, Routes } from "react-router-dom";

const News = () => {
    return (
        <div>
            <div className='btn-group'>
                <button>
                    <NavLink to='/port/maxal'>Maxalliy yangiliklar</NavLink>
                </button>
                <button>
                    <NavLink to="/port/jahon">Jahon yangiliklari</NavLink>
                </button>
            </div>
            <div>
                <Routes>
                    <Route path="/port/maxal" element={ "maxal"} />
                    <Route path="/port/jahon" element={ "jahon"} />
                </Routes>
            </div>
        </div>
    );
};

export default News;
