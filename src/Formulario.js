import { useState } from "react"; 

function Formulario(){
    const [nome, setNome] = useState('Gabriel');
    const [idade, setIdade] = useState('20');

    // Não cadastrar menores de idade
    // Não aceitar nomes em branco
    //------------------------------------
    function cadastrar(){
       
        if(!nome){
            alert("Campo obrigatório - Nome")
        } else if(idade <18){
            alert("Usuário menor de idade")
        } else {
            alert("Usuario cadastrado")
        }
    }

    //------------------------------------

    return (
        <div>
            <h1>Formulario</h1>
            <h1>{nome}</h1>
            
            <input  onChange={(e)=>{setNome(e.target.value)}} 
                    placeholder="Nome" 
                    value={nome} 
            />
            
            <input  onChange={(e)=>{setIdade(e.target.value)}} 
                    placeholder="Idade" 
                    value={idade}
                    type="number"
            />
            
            <h1>{idade}</h1>
            <button onClick={cadastrar}>Cadastrar</button>
        </div>
    );

}

export default Formulario;