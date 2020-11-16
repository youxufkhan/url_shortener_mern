import React, { useEffect, useState } from 'react'
import axios from 'axios';
import config from './environment'

export default function Navigator(props) {
    const [err, seterr] = useState('')
    const url = props.match.params.url
    console.log(url)
    useEffect(async ()=>{
    try{
       let response = await axios.get(config.BASE_API_URL+'link/getUrl?url='+url)
       let data = response.data
       console.log(data)
       window.location.href = data.original_url;
    }catch(e){
        console.error(e.response)
        if(e.response){
            if(e.response.status == 404){
                console.log('here')
                let errorBody = e.response.data
                seterr(errorBody)
                console.log(errorBody)
            }
        }
    }
    })
    return (
        <div>
            {err}
        </div>
    )
}
