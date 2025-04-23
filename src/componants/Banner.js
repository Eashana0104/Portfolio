import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header3.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Database Developer", "Android Developer"];
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I'm Eashana (Ash)`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Database Developer", "Android Developer" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>Hey there! I’m an international student at the University of Manitoba, studying Computer Science. I’m super passionate about Android development, web development, and data analysis — basically, I love building things that make life easier and more fun.

                                        Over the past few years, I’ve worked on all kinds of projects — from an e-commerce app using Firebase to a study buddy app that helps students stay organized. I enjoy diving into code (JavaScript, Python, C++, C# are my go-to languages), integrating REST APIs, playing around with databases like MongoDB, and following Agile practices to keep things on track.

                                        I’m really curious about how AI and social learning can shape the future of tech, and I always try to design clean, intuitive user experiences. I also have a background in customer service, which taught me how to work well with people, stay calm under pressure, and find creative solutions — all skills I bring into my development work.

                                        Right now, I’m looking for opportunities where I can grow, keep learning, and work on meaningful projects with great people. If you’re into tech, AI, or just love solving cool problems — let’s chat!</p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}