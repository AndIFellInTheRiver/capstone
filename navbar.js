const body = document.querySelector("body");
const nav = document.createElement("nav");
nav.className = "navbar navbar-expand-lg navbar-dark bg-dark";
nav.innerHTML = `<div class="container-fluid ">
<a class="navbar-brand" href="../index/index.html">Haoyu Capstone</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="../3.02/bootstrap5_project_main.html"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../3.02/bootstrap5_project_signup.html"
                  >Signup</a
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >Experience</a
                >
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="../assessment1-aug-31.html"
                      target="blank"
                      >Plant trees</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="../assessment2-aug-31.html"
                      target="blank"
                      >Why Plant Trees</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="../practiceassessmenthaoyu-aug-24.html"
                      target="blank"
                      >Why flask</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="../3.01/practiceassessmenthaoyu10-aug-26.html"
                      target="blank"
                      >Adopt Puppy</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="../3.01/CSS_Assessment-sep-9.html"
                      target="blank"
                      >CSS</a
                    >
                  </li>
                </ul>
              </li>
  
              <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >Research</a
                  >
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item"
                        href="../3.03/Research-Haoyu.html"
                        target="blank"
                        >Research</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="../3.03/InitialResearch-Haoyu.html"
                        target="blank"
                        >Initial Research</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="../3.03/RootCauses-Haoyu.html"
                        target="blank"
                        >Root Causes</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="../3.03/CaseStudy-Haoyu.html"
                        target="blank"
                        >Case Study</a
                      >
                    </li>
                    
                    <li><hr class="dropdown-divider" /></li>
                    
                    </li>
                  </ul>
                </li>
  
              
            </ul>

          </div>
        </div>`;

body.prepend(nav);