import React, {useReducer} from 'react';
import FotosContext from './fotosContext';
import FotosReducer from './fotosReducer';
import axios from 'axios';

import {
	CREAR_FOTOS,
	OBTENER_FOTOS,
	EDITAR_FOTOS,
	BORRAR_FOTOS
} from '../../Types'

const FotosState = props =>{
	const initialState = {
		foto: null,
		fotos: []
	}

	const [state, dispatch] = useReducer(FotosReducer, initialState);

	//Crear fotos
	const crearFotos = async (datos)=>{
		//const token = localStorage.getItem('token')
		
		try{
			const res = await axios.post('https://backend-galeria.herokuapp.com/api/fotos', datos);
			console.log(res.data.foto)

			dispatch({
				type: CREAR_FOTOS,
				payload: res.data.foto
			}) 
		}catch(error){
			console.log(error)
		}
	}

	//Obtener fotos
	const obtenerFotos = async ()=>{
		try{
			const res = await axios.get('https://backend-galeria.herokuapp.com/api/fotos');
			console.log(res.data.foto)

			dispatch({
				type: OBTENER_FOTOS,
				payload: res.data.foto
			}) 
		}catch(error){
			console.log(error)
		}	
	}

	//Borrar fotos
	const borrarFotos = async (id)=>{
		//const token = localStorage.getItem('token')
		
		try{
			const res = await axios.delete(`https://backend-galeria.herokuapp.com/api/fotos/${id}`);
			console.log(res)

			dispatch({
				type: BORRAR_FOTOS,
				payload: id
			}) 
		}catch(error){
			console.log(error)
		}
	}
	
	//Editar fotos
	const editarFotos = async (foto)=>{
		//const token = localStorage.getItem('token')
		
		try{
			const res = await axios.put(`https://backend-galeria.herokuapp.com/api/fotos/${foto._id}`, foto);
			console.log(res)

			dispatch({
				type: EDITAR_FOTOS,
				payload: foto
			}) 
		}catch(error){
			console.log(error)
		}
	}

	return(
		<FotosContext.Provider
			value={{
				foto: state.foto,
				fotos: state.fotos,
				crearFotos,
				obtenerFotos,
				borrarFotos,
				editarFotos
			}}
		>{props.children}
			
		</FotosContext.Provider>
	);
}

export default FotosState;