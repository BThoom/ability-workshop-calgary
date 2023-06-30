import Page from './Page'

function VolunteerPage() {
    return (
        <Page>
            <section class="container-fluid px-0">
            <div class="row mx-0">
                <div class="col px-0">
                    <img src="images/volunteer_images_welding.JPG" alt="Close up image of welding" class="img-fluid" style={{width: "100%", height: "400px"}} />
                </div>
            </div>
            </section>

            <section class="container mt-4">            
                <div class="row">
                    <div class="col-6">
                        <img src="images/volunteer_images_1.JPG" alt="Two people unloading a walker from the trunk of a yellow car" class="img-fluid" />
                        <h4>Volunteers meet with clients to discuss their needs and potential solutions</h4>
                    </div>
                    <div class="col-6">
                        <img src="images/volunteer_images_2.JPG" alt="Three men in a workshop looking at schematics on a whiteboard" class="img-fluid" />
                        <h4>Volunteers often collaborate to solve complex issues at our fully outfitted machine shop (coffee & cookies provided!)</h4>
                    </div>
                </div>
            </section>

            <section class="container mt-4">
                <div class="row">
                    <div class="col-6">
                        <img src="images/volunteer_images_3.JPG" alt="Woman in a workshop wearing safety glasses inspecting her project" class="img-fluid" />
                        <h4>While others choose to work from home</h4>
                    </div>
                    <div class="col-6">
                        <img src="images/volunteer_images_4.JPG" alt="Man in a workshop using a grinding wheel on a piece of metal causing sparks" class="img-fluid" />
                        <h4>The shop contains a variety of hand & machinist tools as well as plastic working tools </h4>
                    </div>
                </div>
            </section>
        </Page>
    );
}

export default VolunteerPage;
