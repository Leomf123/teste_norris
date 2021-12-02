import React, {useEffect, useState} from 'react';
import {
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'

import api from '../../services/api';

import Loader from '../../assets/loader.gif';

const App = () => {
  console.log("Hommmme");
  const [data, setData] = useState({});
  console.log(typeof data);// data é do tipo objeto
  console.log(data);
  const [allJokes, setAllJokes]= useState({});
  console.log(typeof allJokes);
  const [isSearch, setIsSearch]= useState(false);
  console.log(typeof isSearch);
  const [isLoad, setIsLoad] = useState(false);
  const [searchJoke, setSearchJoke] = useState('');//searchJoke é uma string que vai armazenar o termo da piada a ser pesquisada
  console.log(typeof searchJoke);

  useEffect(() => {
    setIsLoad(true);//torno isLoad true
    api.get('random').then(
      response => {
        //Aqui atrubui uma piada randomica da api para data que é um objeto
        setData(response.data)
      }
      
    )
    .catch( e => console.error(e))
    .finally(
      () => setTimeout(() => {
      setIsLoad(false)
    }, 
    2000)// esse e o tempo que isLoader vai ser true (2500 é o que tava)
    )
  }, []);
  
  

  const handleSubmit = (e)=> {
    e.preventDefault();//pra quando submeter o form nao reload a página
  
    setIsLoad(true)
    console.log(searchJoke);
    console.log(` search?query=${searchJoke}`);
    api.get(`search?query=${searchJoke}`).then(
      res => {
        setIsSearch(true)
       
        setAllJokes(res.data)//vai ficar a piada pesquisada pelo termo
        console.log(allJokes);
      }
    ).catch( err => console.log(err))
    .finally(( ) => setIsLoad(false))


  }

  //enquanto isLoader for true vai passar um gif (Loader) para renderizacao
  if(isLoad) {
    console.log("Loaaaader");
    return(
      <div className="loader">
        <img src={Loader} alt="Loader"/>
      </div>
    )
  }

  
  return(
    <div className="home-component">
      <div className="titulo">
         <h1 > Chuck Norris Jokes</h1>
      </div>
      
      
        <form onSubmit={handleSubmit}>
          
          <Input type="text" onChange={ e => setSearchJoke(e.target.value)}  className="entrada_pesquisa" placeholder='Pesquise sua piada' size='lg' />
          <Button type='submit' className="botao_pesquisa" size='lg' variant='outline' colorScheme="black" >
            Pesquisar
          </Button>
            

        </form>
      

      {!isSearch ? (
        <div className="jokes">
        
        <h3>{data?.value}</h3>
      </div>

      ) : (
        <>
        { allJokes?.result.map(
          (item, index) => (

          <div key= {index} className="jokes">
            
            <h3>{item?.value}</h3>
          </div>

          )
        )}
        </>
      )}
      
    </div>
  );
}

export default App;


/*
<img src={data?.icon_url} alt={data?.value}/>
<img src={item?.icon_url} alt={item?.value}/>
*/