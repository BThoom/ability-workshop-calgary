import PageContents from './PageContents'

function RequestAssistancePage() {
    return (
        <PageContents>
        <section class="container-fluid px-0">
        <div class="row mx-0">
            <div class="col px-0">
                <img src="images/Ability Workshop main image.jpeg" alt="Three men in a workshop repairing a wheelchair on a work bench" class="img-fluid" style={{width: "100%", height: "400px"}} />
            </div>
            </div>
        </section>

        
		
	<section>
    <div
      id="carouselMultiItemExample"
      class="carousel slide carousel-dark text-center"
      data-mdb-ride="carousel"
    >
      <div class="d-flex justify-content-center mb-4">
        <button
          class="carousel-control-prev position-relative"
          type="button"
          data-mdb-target="#carouselMultiItemExample"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <h3>Request Assistance</h3>
        <button
          class="carousel-control-next position-relative"
          type="button"
          data-mdb-target="#carouselMultiItemExample"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
      <div class="carousel-inner py-4">
        <div class="carousel-item active">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="card">
                  <img
                    src="images/assistance_images_1.jpg"
                    class="card-img-top"
                    alt="example1"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Step 1: Contact Us</h5>
                    <p class="card-text">
                      Send us a request and tell us what you need!
                    </p>
					<a href="https://forms.gle/KnNnT24pfhn7oHzw5" class="btn btn-primary">Send Us a Request</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="card">
                  <img
                    src="images/assistance_images_2.jpg"
                    class="card-img-top"
                    alt="Sunset Over the Sea"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Step 2: We Reach Out to You</h5>
                    <p class="card-text">
                      We will contact you to clarify the information and then send the request out to our volunteer team
                    </p>
                  </div>
                </div>
              </div>
			  <div class="col-lg-4">
                <div class="card">
                  <img
                    src="images/assistance_images_3.png"
                    class="card-img-top"
                    alt="Fissure in Sandstone"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Step 3: A Team Member is Assigned</h5>
                    <p class="card-text">
                      The team member who volunteers to work on the project will contact you for specific details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="card">
                  <img
                    src="images/assistance_images_4.jpg"
                    class="card-img-top"
                    alt="Fissure in Sandstone"
                  />
                  <div class="card-body">
                    <h5 class="card-title">General Information</h5>
                    <p class="card-text">
                      Clients are responsible for project material costs. 
					  We supply the technical expertise and labour.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="card">
                  <img
                    src="images/assistance_images_5.jpg"
                    class="card-img-top"
                    alt="Storm Clouds"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Questions</h5>
                    <p class="card-text">
                      Contact us via email for any questions regarding your request
                    </p>
                    <a href="mailto:coordinator@abilityworkshop.ca" class="btn btn-primary">Email Link</a>
                  </div>
                </div>
              </div>
			  

            </div>
          </div>
        </div>

     

        </div>
      </div>
	  </section>
        </PageContents>
    );
}

export default RequestAssistancePage;
