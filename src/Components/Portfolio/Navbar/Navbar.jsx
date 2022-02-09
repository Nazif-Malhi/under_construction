import React from 'react';
import './Navbar.css'
//import '../BootStrap/bootstrap-4.0.0-dist/css/bootstrap.min.css'
	
const open = '<';
const close = '/>';
const Navbar = () => {

  return <>
  <header>
	  
	{/* <!--- Navbar ---> */}
	<nav class="navbar navbar-expand-lg">
		<div class="container">
			<a class="navbar-brand text-white" href="/" style={{fontSize:"25px"}}>{open}Nazif Malhi {close}</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nvbCollapse" aria-controls="nvbCollapse">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="nvbCollapse">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active pl-1">
						<a class="nav-link" href="/"><i class="fa fa-th-list fa-fw mr-1"></i>Projects</a>
					</li>
					<li class="nav-item pl-1">
						<a class="nav-link" href="/"><i class="fa fa-certificate fa-fw mr-1"></i>Certifications</a>
					</li>
					<li class="nav-item pl-1">
						<a class="nav-link" href="/"><i class="iconify fa-fw mr-1" data-icon="grommet-icons:certificate" ></i>Certificates</a>
					</li>
					<li class="nav-item pl-1">
						<a class="nav-link" href="/"><i class="fa fa-info-circle fa-fw mr-1"></i>About me</a>
					</li>
					<li class="nav-item pl-1">
						<a class="nav-link" href="/"><i class="fa fa-phone fa-fw fa-rotate-180 mr-1"></i>Contact me</a>
					</li>
					<li class="nav-item pl-1">
						<div className="highlightresume">
						<a class="nav-link high" href="/"><i class="fa fa-file-pdf-o fa-fw mr-1"></i>Resume</a>
						</div>
					</li>
					<li class="nav-item pl-1">
						<a class="nav-link" href="/"><i class="fa fa-sign-in fa-fw mr-1"></i>Sign in</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	{/* <!--# Navbar #--> */}
	</header>


  </>;
};

export default Navbar;
