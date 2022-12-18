import React from 'react'
import { useEffect ,useState} from 'react'
import axios from 'axios'
export default function NowPlaying(props) {
    let [list,setList]=useState([])
    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=350100&pageNum=1&pageSize=10&type=1&k=4292586",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16649747193412016509222913","bc":"350100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then((res) => {
            setList(res.data.data.films)
        })
    }, [])
    return (
        <div>
            <ul>
            {
            list.map(item=>
            <li key={item.filmId} onClick={()=>{props.history.push(`/film/${item.filmId}`)}}>{item.name}</li>
        )}</ul></div>
        
    )
}
