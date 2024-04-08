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

<!-- Topbar Start -->
<div class="container-fluid d-none d-lg-block">

<!-- LOGO FALTA MEJORAR
<nav class="navbar bg-body-tertiary">
<div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="../img/Insignia.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
    </a>
</div>
</nav>-->

    <div class="row align-items-center py-4 px-xl-5">
        <div class="col-lg-3">
            <a href="" class="text-decoration-none">
            
                <h1 class="m-0"><span class="text-primary"></span>Colegio de Alto Rendimiento Privado </h1>
            </a>
        </div>
        <div class="col-lg-3 text-right">
            <div class="d-inline-flex align-items-center">
                <i class="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                <div class="text-left">
                    <h6 class="font-weight-semi-bold mb-1">Nuestra Institución</h6>
                    <small></small>
                </div>
            </div>
        </div>
        <div class="col-lg-3 text-right">
            <div class="d-inline-flex align-items-center">
                <i class="fa fa-2x fa-envelope text-primary mr-3"></i>
                <div class="text-left">
                    <h6 class="font-weight-semi-bold mb-1">Email</h6>
                    <small></small>
                </div>
            </div>
        </div>
        <div class="col-lg-3 text-right">
            <div class="d-inline-flex align-items-center">
                <i class="fa fa-2x fa-phone text-primary mr-3"></i>
                <div class="text-left">
                    <h6 class="font-weight-semi-bold mb-1">Celular</h6>
                    <small></small>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Topbar End -->

    `;
    document.body.insertAdjacentHTML('afterbegin', menu);
  });
  