import { Link } from "react-router-dom";
import LogoImg from "../image/pixer-logo.png";
import { menuData } from "../utils/data";

const Header = () => {
    const handlyFunc = () => {
        alert("Salom hello")
    }

    return (
        <div className='header'>
            <div className='header__menu container'>
                <div className='header__logo'>
                    <img src={LogoImg} alt='logo image' />
                </div>
                <div className='header__all'>
                    <ul className='header__list'>
                        {
                            menuData.map(item => (
                                <li key={item.id}>
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            ))
                       }
                    </ul>
                    <button className='btn' onClick={handlyFunc}>+998 94 315 56 66</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
