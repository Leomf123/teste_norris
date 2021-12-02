import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import{
    Grid,
    GridItem,
    Container,
    FormControl,
    FormLabel,
    Select,
    Flex
} from '@chakra-ui/react'
import Logo from '../../assets/logo.png';

import api from '../../services/api'


const Header = () => {
    const [main, setMain] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        api.get('categories').then(
            res => {
                setMain(res.data)
            }
        )
    }, []);


    const handleCategory = (e) => {
        navigate(`/categories/${e.target.value}`)
    }
    /*return(
        <nav>
             <Container maxW="container.xl">

            <Grid templateColums="repeat(5, 1fr)" gap={10}>

                <GridItem colStart={1}>
            <Link to='/'>
            <img src={Logo} className="logo" alt="Logo" />
            </Link>
            </GridItem>
            
            <GridItem colStart={6} colEnd={12} h="150px" > 
            
            <FormControl>
                <FormLabel>Selecione a categoria de sua piada</FormLabel>
                <Select onChange={handleCategory}>
                {main?.map( (item, index) => (
                    <option key={index} value={item} > {item} </option>
                    
                ))}
                </Select>
            </FormControl>
           
            </GridItem>
            

            </Grid>

           </Container>
    </nav>

    

    )*/



    return(
        <nav>
             <Container maxW="container.xl">

            <Flex justify="space-between" align="center">

                
            <Link to='/'>
            <img src={Logo} className="logo" alt="Logo" />
            </Link>
            
            
            
            <div className="seletor_categorias">
            <FormControl>
                <FormLabel> <span className="label_seletor">Selecione a categoria de sua piada</span></FormLabel>
                <Select onChange={handleCategory}  bg='#f98484' color='white' >
                {main?.map( (item, index) => (
                    <option key={index} value={item} > {item} </option>
                    
                ))}
                </Select>
            </FormControl>
            </div>
           
            
            

            </Flex>

           </Container>
    </nav>

    )






}


export default Header;