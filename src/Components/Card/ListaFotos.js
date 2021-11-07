import React, {useContext, useEffect} from 'react';
import FotosContext from '../../Context/Fotos/fotosContext';
import Foto from './Foto';

const ListadoFotos = ()=>{
	const fotosContext = useContext(FotosContext);
    const { fotos, obtenerFotos } = fotosContext;

    useEffect(()=>{
       obtenerFotos()     
    }, [])

	return(
		<div>
			<div className="gallery mt-4 cardt">
				{fotos.map(foto=>(
					<Foto
						key={foto._id}
						foto={foto}
					/>
				))}
			</div>
		</div>
		);
}

export default ListadoFotos;