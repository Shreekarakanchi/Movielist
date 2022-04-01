import Serieslisk1 from "./serieslisk1";
import { useState, useEffect } from "react";
const Popular = () => {
    let [movieName, setName] = useState([])
    useEffect(() => {
        fetch("http://localhost:7000/Movie")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setName(data)
            })
    }, [])
    let clickImage = (id) => {
        var newData = movieName.filter((Value) => Value.id != id)
        setName(newData)
        alert('deleted...')
    }
    useEffect(() => {
        console.log("it working...");
    }, [movieName])

    return (
        <div className="popular">
            <Serieslisk1 data={movieName} pageTitle="Popular Series" delete={clickImage} />
            <Serieslisk1 data={movieName.filter((value) => value.Movie == "KGF-2")} pageTitle="Popular KGF Series" />
            <Serieslisk1 data={movieName.filter((value) => value.Director == "Directored by Chethan")} pageTitle="Popular Series" />
        </div>
    );
}


export default Popular;