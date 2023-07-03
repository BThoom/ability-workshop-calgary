import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import PageContents from './PageContents'

function HomePage() {
    const [title, setTitle] = useOutletContext();
    useEffect(() => { 
        setTitle("Home");
    }, []);

    return (
        <PageContents>
            <section class="container mt-4">
                <img src="images/Ability Workshop main image.jpeg" alt="Three men in a workshop repairing a wheelchair on a work bench" style={{maxWidth: "100%"}} />
                <h1>Welcome to Ability Workshop Society</h1>
                <p>Building innovative solutions for people with disabilities.  
                Promoting independent living, healthy recreation, inclusive play and self-sufficiency.</p>
            </section>

            <section class="container mt-4">
                <h2>About Us</h2>
                <p>Ability Workshop Society started out as the Calgary chapter of Tetra Society of North America in 1994.  In 2002, Tetra Assistive Devices Society of Calgary evolved into an independent chapter of Tetra Society of North America when it was granted non-profit status.   In 2021, we became a fully independent organization with a new name:  Ability Workshop Society.  </p>

                <p>Ron Marshall, a long time volunteer,  made a substantial donation of metal working equipment in 2012.  With space donated by the Drop-In Centre,  we opened the workshop where people meet to socialize, collaborate and create.  In honour of his generosity, leadership and mentorship, the shop was named the Ron Marshall Center in 2019.</p>
                
                <p>Over the years, we've continued to grow and increase our capabilities to service the disabled community.  With over 90 new requests for assistance every year,  we continue to provide assistive devices to a vast array of people.  We have supported University of Calgary engineering students doing their capstone projects and partnered with CP Kids and Family. </p>
            </section>
        </PageContents>
    );
}

export default HomePage;