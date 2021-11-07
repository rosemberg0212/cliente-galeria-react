import {
	CREAR_FOTOS,
	OBTENER_FOTOS,
	EDITAR_FOTOS,
	BORRAR_FOTOS
} from '../../Types'

export default (state, action)=>{
	switch(action.type){

		case CREAR_FOTOS:
			return{
				...state,
				foto: action.payload
			}

		case OBTENER_FOTOS:
			return{
				...state,
				fotos: action.payload
			}
		
		case BORRAR_FOTOS:
			return{
				...state,
				fotos: state.fotos.filter(foto=> foto._id!==
				action.payload)
			}

		case EDITAR_FOTOS:
			return{
				...state,
				fotos: state.fotos.map(foto=>{
					if(foto._id === action.payload._id){
						
					}
				})
			}
		default:
			return state;
	}
}