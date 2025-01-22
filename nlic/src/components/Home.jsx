import pastor from '../assets/pastor.jpeg'
export const Home = () => {
    return (
        <header>
            <h1>Welcome to NEW LIFE IN JESUS CHRIST CHURCH</h1>
            <p>We are delighted that you have chosen to visit our website! We welcome you to go through all the pages to see what the Lord is doing and as you browse we pray that you may catch the vision, partner with us to fulfill the Great Commission of our Lord.</p>
            <p>Our Ministry has ongoing passion for the lost world and to strengthen the body of Christ with insightfull practical teaching with the Rhema Word which ministers to the body of Christ holistically.</p>
            <p>You can share with friends and family about our website so that they can also position themselves serving the Lord by partnering with us in the Gospel work.</p>
            <div id="pastor">
                <figure>
                    <img id='pastorImg' src={pastor} alt="Pastor image" />
                    <figcaption style={{textAlign: 'center', color: 'darkGreen'}}>Pr. Kumaresan</figcaption>
                </figure>
            </div>
            
        </header>
    )
}