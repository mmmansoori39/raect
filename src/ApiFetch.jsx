import React, { useEffect, useState } from "react";
import axios from "axios";

function ApiFetch(){

    const [num, setnum]= useState();
    const [name, setname]= useState();
    const [moves, setmoves]= useState();
    useEffect(()=>{
        // alert("jasmine")
        async function getData(){
            const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setname(res.data.name);
            setmoves(res.data.moves.length)

            // console.log(res.data.name);
            // console.log(res.data.moves.length);
            // console.log(res);
        }
        getData();
    })
    const getValue= (e)=>{
        setnum(e.target.value);
        // console.log(num)
        // console.log(e.target.value);
    }

    return(
        <>
        <h1>I have selected {num} value</h1>
        <h1>My name is {name}</h1>
        <h1>I have {moves}moves</h1>
        <select value={num} onChange={getValue}>
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="9">9</option>
            <option value="25">25</option>
            <option value="6">6</option>
            <option value="11">11</option>
            <option value="18">18</option>
            <option value="13">13</option>
            <option value="15">15</option>
            <option value="7">7</option>
            <option value="5">5</option>
        </select>
        </>
    )
}
export default ApiFetch;