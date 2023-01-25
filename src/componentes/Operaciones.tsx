import * as React from "react";
import { View , Text, Alert} from "react-native";
import { Mycolors } from "../styles/Colores";
import { Botones } from "./Botones";


export function Operaciones(){

    const [firstNumber, setFirstNumber]=React.useState("0");
    const [secondNumber, setSecondNumber]=React.useState("");
    const [operation, setOperation]=React.useState("");
    const [result, setResult]=React.useState<Number|null>(null);

    const primerNumero=(Valor:string)=>{
        if(result===null){
            if(firstNumber.length < 8){
                setFirstNumber(firstNumber+Valor);
            }
        }else{
            if(secondNumber!==""){
                //Alert.alert(secondNumber);
                if(firstNumber.length < 8){
                    setFirstNumber(firstNumber+Valor);
                    setResult(null);
                } 
            }else{
               clear();
                if(firstNumber.length < 8){
                    setFirstNumber(firstNumber+Valor);
                } 
            }
            
        }
        
    }
    const segundoNumero=(valor:string)=>{
        if(firstNumber===""){
            if(result!==null){
                setSecondNumber(String(result));
                setOperation(valor);
                setFirstNumber("");
            }
        }else{
            setSecondNumber(firstNumber);
            setOperation(valor);
            setFirstNumber("");
        }
        
        
    };
    const clear=()=>{
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    }

    const resultado=(operation)=>{
        
        switch(operation){
            case "+":
                clear();
                setResult(parseFloat(secondNumber)+parseFloat(firstNumber));
                setSecondNumber(secondNumber+operation+firstNumber);
                break;
            case "-":
                clear();
                setResult(parseInt(secondNumber)-parseInt(firstNumber));
                setSecondNumber(secondNumber+operation+firstNumber);
                break;
            case "*":
                clear();
                setResult(parseInt(secondNumber)*parseInt(firstNumber));
                setSecondNumber(secondNumber+operation+firstNumber);
                break;
            case "/":
                clear();
                setResult((parseInt(secondNumber)/parseInt(firstNumber)));
                setSecondNumber(secondNumber+operation+firstNumber);
                break;
            default:
                setSecondNumber("");
                setFirstNumber(String(result));
                setResult(null);
                break;
        }
    }

    function DisplayResult(){
        if(result === null){
            return firstNumber;
        }else if(result !== null){
            return String(result);
        }
    }

    return(
        <>
        <View style={Mycolors.viewBottom}>
            <View style={Mycolors.pantalla}>
                <View style={Mycolors.PantallaPrimerNumero}>
                    <Text style={Mycolors.primeroText}>{secondNumber}{operation}</Text>
                </View>
                <View style={Mycolors.PantallaSegundoNumero}>
                    <Text style={DisplayResult().length < 8 ?Mycolors.segundoText : Mycolors.TextPequeño}>{DisplayResult()}</Text>
                </View>
            </View>
            <View style={Mycolors.row}>
                <Botones title={"c"} tipo="operacion" onPress={()=>clear()}/>
                <Botones title={"+/-"} tipo="operacion" onPress={undefined}/>
                <Botones title={"%"} tipo={"operacion"} onPress={()=>segundoNumero("%")}/>
                <Botones title={"/"} tipo={"operacion"} onPress={()=>segundoNumero("/")}/>
                {}
            </View>
            <View style={Mycolors.row}>
                <Botones title={"7"} tipo="numero" onPress={()=>primerNumero("7")}/>
                <Botones title={"8"} tipo="numero" onPress={()=>primerNumero("8")}/>
                <Botones title={"9"} tipo="numero" onPress={()=>primerNumero("9")}/>
                <Botones title={"x"} tipo="operacion" onPress={()=>segundoNumero("*")}/>
            </View>
            <View style={Mycolors.row}>
                <Botones title={"4"} tipo="numero" onPress={()=>primerNumero("4")}/>
                <Botones title={"5"} tipo="numero" onPress={()=>primerNumero("5")}/>
                <Botones title={"6"} tipo="numero" onPress={()=>primerNumero("6")}/>
                <Botones title={"-"} tipo="operacion" onPress={()=>segundoNumero("-")}/>
            </View>
            <View style={Mycolors.row}>
                <Botones title={"1"} tipo="numero" onPress={()=>primerNumero("1")}/>
                <Botones title={"2"} tipo="numero" onPress={()=>primerNumero("2")}/>
                <Botones title={"3"} tipo="numero" onPress={()=>primerNumero("3")}/>
                <Botones title={"+"} tipo="btnMint" onPress={()=>segundoNumero("+")}/>
            </View>
            <View style={Mycolors.row}>
                <Botones title={"."} tipo="operacion" onPress={()=>primerNumero(".")}/>
                <Botones title={"0"} tipo="numero" onPress={()=>primerNumero("0")}/>
                <Botones title={"Del"} tipo="operacion" onPress={()=>setFirstNumber(firstNumber.slice(0,-1))}/>
                <Botones title={"="} tipo="operacion" onPress={()=>resultado(operation)}/>
            </View>
        </View>
        </>
    );
}