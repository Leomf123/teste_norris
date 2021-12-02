import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

import api from '../../services/api'

import Loader from '../../assets/loader.gif';

const Categories = () => {
    const {category} = useParams();
    const [isLoad, setIsLoad] = useState(false)
    const [joke, setJoke] = useState({});
    useEffect(() =>{
        setIsLoad(true)
        api.get(`random?category=${category}`).then(
            res => {
                setJoke(res.data)
            }
        )
        .catch( err => console.error(err))
        .finally( () => setIsLoad(false))

    }, [category]
    )

    if(isLoad){
        return (
            <div className="loader">
               <img src={Loader} alt="loader" />
            </div>
        )
    }

    return(
        <div className="home-component">
            <div className="titulo">
                <h1 > Chuck Norris Jokes</h1>
            </div>
        
             <div className="jokes">
                <img src={joke?.icon_url} alt={joke?.value} />
                 <h3>{joke?.value}</h3>
             </div>
        </div>
    )
}

export default Categories;