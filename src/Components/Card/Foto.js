import React from 'react';
import '../../Styles/Foto.css';

const Foto = ({foto})=>{
	
	return(
		<div>
			<div className="">
			   <div className="box">
			      <a href={foto.imgURL} target="_blank"><img src={foto.imgURL} className="imag" /></a>
			      <div className="info">
			        <h3>{foto.nombre}</h3>
			        <p>{foto.descripcion}</p>
			      </div>
			   </div>
			</div>
		</div>
		);
}

export default Foto;