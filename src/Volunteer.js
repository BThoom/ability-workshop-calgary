import './App.css';
import NavBar from './NavBar'

function Volunteer() {
  return (
    <div className="App">
              <NavBar />

          <main>
              <section class="container-fluid px-0">
              <div class="row mx-0">
                  <div class="col px-0">
                      <img src="images/volunteer_images_welding.JPG" alt="Image description" class="img-fluid"/>
                  </div>
                  </div>
              </section>

              <section class="container mt-4">            
                  <div class="row">
                      <div class="col-6">
                          <img src="images/volunteer_images_1.JPG" alt="Image description" class="img-fluid"/>
                          <h4>Volunteers meet with clients to discuss their needs and potential solutions</h4>
                  </div>
                  <div class="col-6">
                      <img src="images/volunteer_images_2.JPG" alt="Image description" class="img-fluid"/>
                      <h4>Volunteers often collaborate to solve complex issues at our fully outfitted machine shop (coffee & cookies provided!)</h4>
                  </div>
                  </div>
              </section>

              <section class="container mt-4">
                  <div class="row">
                  <div class="col-6">
                      <img src="images/volunteer_images_3.JPG" alt="Image description" width="510" height="300" class="img-fluid"/>
                      <h4>While others choose to work from home</h4>
                  </div>
                  <div class="col-6">
                      <img src="images/volunteer_images_4.JPG" alt="Image description" width="510" height="300" class="img-fluid"/>
                      <h4>The shop contains a variety of hand & machinist tools as well as plastic working tools </h4>
                  </div>
                  </div>
              </section>
        </main>

        <footer class="container mt-4">
          <p>&copy; 2023 Ability Workshop Society. All rights reserved.</p>
        </footer>

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
}

export default Volunteer;
