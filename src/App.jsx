import { Route, Routes } from "react-router-dom";
import FormPage from "./companents/form";
import Header from "./companents/header";
import Intro from "./companents/intro";
import Test from "./companents/proba";
import WorldNews from "./companents/world-news";
import Maxal from "./companents/maxal";

const App = () => {
    const data = [
        {
            id: 1,
            title: "Birinchi",
        },
        {
            id: 2,
            title: "Ikkinchi",
        },
        {
            id: 3,
            title: "Uchunchi",
        },
        {
            id: 4,
            title: "To'rtinchi",
        },
    ];

    const today = new Date();

    const farmatDate = (date) => {
        return date.toLocaleString();
    };
    return (
        <div>
            <Header />

            <Routes>
                <Route path='/' element={<Intro />} />
                <Route path='/service' element={<Test value={data} />} />
                <Route path='/team' element={<FormPage />} />
                <Route path='/jahon' element={<WorldNews />} />
                <Route path='/maxal' element={<Maxal />} />
            </Routes>

            {/* <p style={{background:"red"}}>salom vaqt : {farmatDate(today)}</p> */}
        </div>
    );
};

export default App;
