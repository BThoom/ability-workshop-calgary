import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import PageContents from './PageContents';

function ProjectsPage() {
    const [title, setTitle] = useOutletContext();
    useEffect(() => { 
        setTitle("Projects");
    }, []);

    return (
        <PageContents>
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
          <span class="visually-hidden">Previous</span>
        </button>
        <h3 style={{marginTop: "15px"}}>2020 Projects</h3>
        <button
          class="carousel-control-next position-relative"
          type="button"
          data-mdb-target="#carouselMultiItemExample"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="carousel-inner py-4">
        <div class="carousel-item active">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_1.png"
                    class="card-img-top"
                    alt="Senior woman sitting in a wheelchair in a living room"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 d-none d-lg-block">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_2.png"
                    class="card-img-top"
                    alt="Close-up photo of a woman wearing a hat and a headset"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 d-none d-lg-block">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_3.png"
                    class="card-img-top"
                    alt="Young girl smiling in a wheelchair"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-12">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_4.png"
                    class="card-img-top"
                    alt="Remotely operated door lock"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 d-none d-lg-block">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_5.png"
                    class="card-img-top"
                    alt="Man in a wheelchair using a Mac laptop"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 d-none d-lg-block">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_6.png"
                    class="card-img-top"
                    alt="Man in a wheelchair wearing an orange polo shirt"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_7.png"
                    class="card-img-top"
                    alt="Young boy sitting in a stroller playing on an ipad"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_8.png"
                    class="card-img-top"
                    alt="Boy smiling in a wheel chair"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_9.png"
                    class="card-img-top"
                    alt="Girl in a wheelchair drinking water from a hydration pack"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div
      id="carouselMultiItemExample2021"
      class="carousel slide carousel-dark text-center"
      data-mdb-ride="carousel"
    >
      <div class="d-flex justify-content-center mb-4">
        <button
          class="carousel-control-prev position-relative"
          type="button"
          data-mdb-target="#carouselMultiItemExample2021"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <h3 style={{marginTop: "15px"}}>2021 Projects</h3>
        <button
          class="carousel-control-next position-relative"
          type="button"
          data-mdb-target="#carouselMultiItemExample2021"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="carousel-inner py-4">
        <div class="carousel-item active">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_10.png"
                    class="card-img-top"
                    alt="Man wearing glasses in a wheelchair working on a craft project"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 d-none d-lg-block">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_11.png"
                    class="card-img-top"
                    alt="Woman helping a young girl with physiotherapy"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 d-none d-lg-block">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_3.png"
                    class="card-img-top"
                    alt="Young girl smiling in a wheelchair"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-12">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_12.png"
                    class="card-img-top"
                    alt="Woman in a wheelchair playing with a white dog beside her"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 d-none d-lg-block">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_5.png"
                    class="card-img-top"
                    alt="Man in a wheelchair using a Mac laptop"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 d-none d-lg-block">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_6.png"
                    class="card-img-top"
                    alt="Man in a wheelchair wearing an orange polo shirt"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_7.png"
                    class="card-img-top"
                    alt="Young boy sitting in a stroller playing on an ipad"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_8.png"
                    class="card-img-top"
                    alt="Boy smiling in a wheel chair"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                <div class="card">
                  <img
                    src="./images/gallery_example_picture_9.png"
                    class="card-img-top"
                    alt="Girl in a wheelchair drinking water from a hydration pack"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
        <div
        id="carouselMultiItemExample2022"
        class="carousel slide carousel-dark text-center"
        data-mdb-ride="carousel"
      >
        <div class="d-flex justify-content-center mb-4">
          <button
            class="carousel-control-prev position-relative"
            type="button"
            data-mdb-target="#carouselMultiItemExample2022"
            data-mdb-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <h3 style={{marginTop: "15px"}}>2022 Projects</h3>
          <button
            class="carousel-control-next position-relative"
            type="button"
            data-mdb-target="#carouselMultiItemExample2022"
            data-mdb-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="carousel-inner py-4">
          <div class="carousel-item active">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <div class="card">
                    <img
                      src="./images/gallery_example_picture_13.png"
                      class="card-img-top"
                      alt="Young girl lounging in a chair"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk
                      </p>
                      <a href="#!" class="btn btn-primary">Details</a>
                    </div>
                  </div>
                </div>
  
                <div class="col-lg-4 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="./images/gallery_example_picture_14.png"
                      class="card-img-top"
                      alt="Two people in separate wheelchairs being pushed together on a wheeled platform"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                      <a href="#!" class="btn btn-primary">Details</a>
                    </div>
                  </div>
                </div>
  
                <div class="col-lg-4 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="./images/gallery_example_picture_15.png"
                      class="card-img-top"
                      alt="Woman in a red shirt smiling after she secured her bicycle to a car"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                      <a href="#!" class="btn btn-primary">Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="carousel-item">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-12">
                  <div class="card">
                    <img
                      src="./images/gallery_example_picture_4.png"
                      class="card-img-top"
                      alt="Remotely operated door lock"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                      <a href="#!" class="btn btn-primary">Details</a>
                    </div>
                  </div>
                </div>
  
                <div class="col-lg-4 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="./images/gallery_example_picture_5.png"
                      class="card-img-top"
                      alt="Man in a wheelchair using a Mac laptop"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                      <a href="#!" class="btn btn-primary">Details</a>
                    </div>
                  </div>
                </div>
  
                <div class="col-lg-4 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="./images/gallery_example_picture_6.png"
                      class="card-img-top"
                      alt="Man in a wheelchair wearing an orange polo shirt"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                      <a href="#!" class="btn btn-primary">Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="carousel-item">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <div class="card">
                    <img
                      src="./images/gallery_example_picture_7.png"
                      class="card-img-top"
                      alt="Young boy sitting in a stroller playing on an ipad"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                      <a href="#!" class="btn btn-primary">Details</a>
                    </div>
                  </div>
                </div>
  
                <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="./images/gallery_example_picture_8.png"
                      class="card-img-top"
                      alt="Boy smiling in a wheel chair"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                      <a href="#!" class="btn btn-primary">Details</a>
                    </div>
                  </div>
                </div>
  
                <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div class="card">
                    <img
                      src="./images/gallery_example_picture_9.png"
                      class="card-img-top"
                      alt="Girl in a wheelchair drinking water from a hydration pack"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                      <a href="#!" class="btn btn-primary">Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div
    id="carouselMultiItemExample2023"
    class="carousel slide carousel-dark text-center"
    data-mdb-ride="carousel"
  >
    <div class="d-flex justify-content-center mb-4">
      <button
        class="carousel-control-prev position-relative"
        type="button"
        data-mdb-target="#carouselMultiItemExample2023"
        data-mdb-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <h3 style={{marginTop: "15px"}}>2023 Projects</h3>
      <button
        class="carousel-control-next position-relative"
        type="button"
        data-mdb-target="#carouselMultiItemExample2023"
        data-mdb-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="carousel-inner py-4">
      <div class="carousel-item active">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="card">
                <img
                  src="./images/gallery_example_picture_16.png"
                  class="card-img-top"
                  alt="Man in a wheelchair using a pole extension to play curling on ice"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk
                  </p>
                  <a href="#!" class="btn btn-primary">Details</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 d-none d-lg-block">
              <div class="card">
                <img
                  src="./images/gallery_example_picture_17.png"
                  class="card-img-top"
                  alt="Boy and a girl sitting in a bed that has a surrounding zip up mesh"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </p>
                  <a href="#!" class="btn btn-primary">Details</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 d-none d-lg-block">
              <div class="card">
                <img
                  src="./images/gallery_example_picture_18.png"
                  class="card-img-top"
                  alt="Man in a blue shirt assembling a large toy"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </p>
                  <a href="#!" class="btn btn-primary">Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12">
              <div class="card">
                <img
                  src="./images/gallery_example_picture_4.png"
                  class="card-img-top"
                  alt="Remotely operated door lock"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </p>
                  <a href="#!" class="btn btn-primary">Details</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 d-none d-lg-block">
              <div class="card">
                <img
                  src="./images/gallery_example_picture_5.png"
                  class="card-img-top"
                  alt="Man in a wheelchair using a Mac laptop"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </p>
                  <a href="#!" class="btn btn-primary">Details</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 d-none d-lg-block">
              <div class="card">
                <img
                  src="./images/gallery_example_picture_6.png"
                  class="card-img-top"
                  alt="Man in a wheelchair wearing an orange polo shirt"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </p>
                  <a href="#!" class="btn btn-primary">Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <div class="card">
                <img
                  src="./images/gallery_example_picture_7.png"
                  class="card-img-top"
                  alt="Young boy sitting in a stroller playing on an ipad"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </p>
                  <a href="#!" class="btn btn-primary">Details</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
              <div class="card">
                <img
                  src="./images/gallery_example_picture_8.png"
                  class="card-img-top"
                  alt="Boy smiling in a wheel chair"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </p>
                  <a href="#!" class="btn btn-primary">Details</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
              <div class="card">
                <img
                  src="./images/gallery_example_picture_9.png"
                  class="card-img-top"
                  alt="Girl in a wheelchair drinking water from a hydration pack"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </p>
                  <a href="#!" class="btn btn-primary">Details</a>
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

export default ProjectsPage;