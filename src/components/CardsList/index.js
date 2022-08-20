import React, { useEffect, useState } from "react";
import Card from "../Card";
import styles from "./styles.module.css";

function CardsList() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            });
    }, [])

    const removeCard = (id) => {
        let newData = data.filter((doc) => doc.id !== id);
        setData(newData);
    }

    return (
        <div className={styles.cont}>
            {
                data && data.map((item, i) => <Card key={i} id={item.id} title={item.name} removeCard={removeCard} email={item.email} websiteURL={item.website}/>)
            }
        </div>
    );
}

export default CardsList;
