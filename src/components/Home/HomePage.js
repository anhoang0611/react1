import videohomepage from '../../assets/videohomepage.mp4';
const HomePage = (props) => {
    return (
        <div className='homepage-container'>
            <video autoPlay muted loop >
                <source
                    src={videohomepage}
                    type="video/mp4"
                />


            </video>
        </div>
    )
}

export default HomePage;