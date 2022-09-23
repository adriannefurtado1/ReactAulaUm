/**
 * ⦁ Crie um programa de cadastro de veículos de uma loja de seminovos (utilizando React). O programa deve implementar as funcionalidades descritas no texto abaixo:
 
(1) - Cadastrar automóvel;
(2) - Pesquisar automóvel; (Alert)

O cadastro do automóvel deve solicitar modelo do veículo, marca, placa e ano de fabricação. O programa deve respeitar as seguintes restrições:
⦁ Não se pode cadastrar uma placa previamente cadastrada;
⦁ A pesquisa deve ser feita pela placa, marca ou modelo e deve listar todos os resultados que correspondem à pesquisa; 
⦁ O usuário deve pesquisar um veículo pela placa para alterar o cadastro e só deve permitir alterar o modelo e marca;
 */

import { useState } from "react"; 

const veiculos = [];

function Veiculo(){
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    const [placa, setPlaca] = useState('');

        //------------------------------------
    function cadastrar(){
        let isNovaPlaca = true;

        veiculos.forEach(veiculo => {
            if(veiculo.placa === placa){
                isNovaPlaca = false
            }
        });
       
        if(!isNovaPlaca){
            alert("Placa já cadastrada")
        } else if(!marca){
            alert("Campo obrigatório - Marca")
        } else if(!modelo){
            alert("Campo obrigatório - Modelo")
        } else if(!ano){
            alert("Campo obrigatório - Ano")            
        } else if(!placa){
            alert("Campo obrigatório - Placa")                
        } else {
            alert("Veículo cadastrado")
        }

        const veiculo = {
            modelo: modelo,
            marca: marca,
            placa: placa,
            anoFabricação: ano
        }        
        veiculos.push(veiculo)
    }

    function pesquisar(){
        let textoRetorno  = ``
    
        veiculos.forEach(veiculo => {
            let achou = false

            if(veiculo.placa === placa){
                achou = true                    
            }  
    
            if (achou){
                textoRetorno += `VEÍCULO: ${veiculo.marca} - ${veiculo.modelo} - ${veiculo.placa} - ${veiculo.anoFabricação} \n`
            }         
            
        });
        if(!textoRetorno){
            textoRetorno = `Não foram encontrados veículos com a placa informada.`
        }
    
        alert(textoRetorno)
        return null
    }
    //------------------------------------

    return (
        <div>
            <h1>Cadastro de Veículos</h1>          
            
            <input  onChange={(e)=>{setMarca(e.target.value)}} 
                    placeholder="Marca" 
                    value={marca}/>
            
            <input  onChange={(e)=>{setModelo(e.target.value)}} 
                    placeholder="Modelo" 
                    value={modelo}/>
            
            <input  onChange={(e)=>{setPlaca(e.target.value)}} 
                    placeholder="Placa" 
                    value={placa}/>

            <input  onChange={(e)=>{setAno(e.target.value)}} 
                    placeholder="Ano" 
                    value={ano}
                    type="number"/>

            <h2>{marca}</h2>
            <h2>{modelo}</h2>
            <h2>{placa}</h2>
            <h2>{ano}</h2>
            <button onClick={cadastrar}>Cadastrar</button>
            <button onClick={pesquisar}>Pesquisar</button>
        </div>
    );

}

export default Veiculo;