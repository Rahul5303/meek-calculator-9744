import { useEffect, useState } from "react"
import axios from 'axios';
import "../styles/mobile.css"
import { Link } from "react-router-dom"

export const Mobile = () => {

    const [Mobile, setProduct] = useState([]);
    useEffect(() => {
        setData()
    }, [])

    const setData = () => {
        axios.get("https://morning-scrubland-78864.herokuapp.com/all").then((res) => {
            setProduct(res.data);
            console.log(res.data);
        });
    };
    return (
        <div className="collectionData">

            {Mobile.map((e) => (
                <div className="categoryDiv">
                <Link to={`/MobileDetail/${e._id}`}>
                <img src={e.imgUrl} />
                </Link>
                <p className="titleP">{e.title}</p>
                <span>
                <p>${e.price}</p>
                <p>$ {(e.price*1.3).toFixed(0)}.00</p>
                </span>
                </div>
            ))}

        </div>

    )
}





