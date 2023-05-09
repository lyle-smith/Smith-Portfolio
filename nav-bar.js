class NavBar extends HTMLElement {
    constructor() {

    super();

    this.innerHTML = ` 
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="about.html" class="nav-link">About Me</a>
                    <a href="contact.html" class="nav-link">Contact</a>
                    <a href="projects.html" class="nav-link">My Portfolio</a>
                    <a href="resume.pdf" class="nav-link">My Resume</a>
                </div>
            </div>
        </div>
    </nav>
    `;
    }

}

customElements.define('nav-bar', NavBar);