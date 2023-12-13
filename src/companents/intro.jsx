import IntroImg from "../image/youtube.png"
const Intro = () => {

    const data = {
        title: "Biznesingizni keyingi bosqichga olib chiqing",
        text: "Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar",
        img: IntroImg,
    };
    return <div className="intro container">
        <div className="intro__info">
            <h1 className="intro__title">{data.title}</h1>
            <p className="intro__text">{data.text}</p>
        </div>
        <div className="intro__img">
            <img src={data.img} alt={data.title} />
        </div>
    </div>
}

export default Intro;