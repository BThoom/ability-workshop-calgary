import { useEffect } from 'react';
import { useOutletContext, useRouteError } from 'react-router-dom';
import PageContents from './PageContents'

function ErrorPage() {
    const error = useRouteError();

    const { setTitle } = useOutletContext();
    useEffect(() => {
        setTitle(error.status + " Error");
    }, [setTitle, error.status]);

    // This is a workaround to hide the error overlay in development mode for 404 errors
    const errorHideStyle = `body > iframe { display: none; }`;

    return (
        <PageContents>
            { process.env.NODE_ENV === "development" && error.status === 404 && <style>{errorHideStyle}</style> }
            <section class="container mt-4">
                <h1>{error.status} Error</h1>
            </section>

            <section class="container mt-4">
                <h2>An error occurred and the requested page could not be loaded.</h2>
                <p>{error.statusText || error.message}</p>
            </section>
        </PageContents>
    );
}

export default ErrorPage;