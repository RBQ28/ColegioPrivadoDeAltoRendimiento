document.addEventListener("DOMContentLoaded", function() {
    var menu = `
    <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0" id="navegacion">
        
    <button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
        <div class="navbar-nav py-0" >
            <a href="../index.html" class="nav-item nav-link" >Corporativo</a>
            <a href="../nivel_academico.html" class="nav-item nav-link">Nivel Academico</a>
            <a href="../nuestras_academias.html" class="nav-item nav-link">Academias</a>
            <a href="../contact.html" class="nav-item nav-link">Contáctenos</a>
    
        </div>
    </div>
</nav>


    `;
    document.body.insertAdjacentHTML('afterbegin', menu);
  });
  