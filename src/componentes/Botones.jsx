import {Alert, Text, TouchableOpacity} from 'react-native';
import { Mycolors } from "../styles/Colores";



export function Botones({title, tipo, onPress}){   
    return(
        <TouchableOpacity style={tipo==="numero"?Mycolors.btnMint:Mycolors.btnPurple} 
        onPress={onPress}>
            <Text style={tipo==="numero"?Mycolors.btnStyleMint:Mycolors.btnStylePurple}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}


