import { maxalliydata } from "../utils/data";

const Maxal = () => {
    return (
        <div className='cards'>
            {maxalliydata.map((item) => (
                <div className='card' key={item.id}>
                    <div className='card__img'>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <h1 className='card__title'>{item.title}</h1>
                    <p className='card__text'>{item.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Maxal;
