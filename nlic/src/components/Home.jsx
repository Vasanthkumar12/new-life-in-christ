import pastor from '../assets/pastor.jpeg'
export const Home = () => {
    return (
        <>
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

            <section id="mainContent">
            <p>Our hope is to see the expansion of God's kingdom as each and every member is equipped to serve God wherever they go—whether that is in the home, the workplace, the business world, the arts, politics, or law. We pray that this would impact families, communities, neighborhoods, our commonwealth, nation, and the world.</p>
            <p>Though there is much darkness in the world, we aim to shed the light of the gospel wherever we go, living under the love of God, knowing His law and gospel, and thriving as we follow Him.</p>
            <p>As we go out, believing in the Lord Jesus Christ and living out our calling for God's glory, we trust that we will see God build His kingdom.</p>
            <p>We believe the starting point is faith in Jesus Christ.</p>
            <p>We believe the call of the church is to equip each and every member for their work of service in the world. And as that happens, God builds His kingdom, spreading light, love, and joy in the fullness of His Son.</p>
            <p>We invite you to join us in this endeavor.</p>
            </section>
        </>
    )
}