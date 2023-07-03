import { useEffect, useState } from 'react';
import { NavBar, Footer } from '../GlobalComponents'
import { Outlet } from 'react-router-dom';

function Page(props) {
    const [title, setTitle] = useState("");
    useEffect(() => {
        if (typeof(title) === "string" && title !== "") {
            if (typeof(props.baseTitle) === "string" || props.baseTitle !== "") {
                document.title = title + " - " + props.baseTitle;
            }
            else {
                document.title = title;
            }
        }
        else if (typeof(props.baseTitle) === "string"  && props.baseTitle !== "") {
            document.title = props.baseTitle;
        }
    }, [title, props.baseTitle]);

    return (
        <div className="App">
            <NavBar />

            <Outlet context={{setTitle: setTitle}} />

            <Footer />
        </div>
    );
}

export default Page;