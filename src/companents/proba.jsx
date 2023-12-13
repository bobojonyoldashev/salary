import { useState } from "react";

const Test = (props) => {
    const { value } = props;
    const [count, setCount] = useState(1);
    const [color, setColor] = useState("rgb(71,71,71)");
    
    const handlyColor = () => {
        setColor(
            `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
                Math.random() * 255
            )},${Math.floor(Math.random() * 255)})`
        );
    };
    return (
        <div className='container'>
            <ul>
                {value.map((item) => (
                    <p key={item.id}>{item.title}</p>
                ))}
            </ul>
            <div>
                <div className='box' style={{ background: `${color}` }}></div>

                <button onClick={handlyColor}>Change Color</button>
            </div>
            <p className='count'>{count}</p>
            <button className='btnn' onClick={() => setCount(count + 1)}>
                +
            </button>
            <button className='btnn' onClick={() => setCount(count - 1)}>
                -
            </button>
        </div>
    );
};

export default Test;
