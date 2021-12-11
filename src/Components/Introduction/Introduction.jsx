import './introduction.scss'

export default function Introduction() {
    return (
        <div className='introduction' id='introduction'>
            <div className="left">
                <div className="imgContainer">
                    <img alt="a guy (me)" src='Guy.png'></img>
                </div>
            </div>
            <div className="right">
                <h1>Hello, I'm Edwin John<br/>A Software/Web Developer</h1>
                <p>I help design and develop software and web applications.</p>
                <div className="imgContainer">
                    <a href="#portfolio">
                        <img alt="down arrow" src="down.png"/>
                    </a>
                </div>
                
            </div>
        </div>
    )
}
