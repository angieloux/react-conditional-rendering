import React from 'react';
import { characters } from '../data/starWars.js';

const Main = () => {
    return (
        <div>
        <h1>Star Wars Characters</h1>
        <hr></hr>
        {characters.map((character, index) => {
            console.log(character)

            return (
            <div className="character" key ={index}>
                <h2>Name: {character.name}</h2>
                <p>Height: {character.height}</p>
                <p>Birth year: {character.birth_year}</p>
                <p>Hair colour: {character.hair_color}</p>
                {character.image ? (
                    <img src={character.image} alt={character.name} height="200px" /> 
                    ) : (
                    <h4>No image found</h4>
                    )}
                    
                <p>Gender: 
                {character.gender === "n/a" ? (
                    <> They're a droid.</>
                    ) : (
                        <> {character.gender}</>
                    )}
                    </p>
                <hr></hr>
            </div>
            )
        
        })}
        </div>
    )

    // const name = "AJ";
    // const loading = false


    // classic if else statement
    // if (loading) {
    //     return null
    // } else {
    //     return (
    //         <main>
    //             <h1>Hi my name is {name}</h1>
    //         </main>
    //     )
    // }


    // USING THE TERNARY OPERAOPER
    
    // return loading ? null : (
    //     <main>
    //         <h1>hello world! my name is {name}</h1>
    //     </main>
    // )


    // short circuit logic --> will return the second part of && 
    // return !loading && (
    //     <main>
    //         <h1>Hi my name is {name}</h1>
    //     </main>
    // )


    // another short circut syntax

    // return (
        

    //     <main>
    //         {loading ? (
    //             <h1>Loading...</h1>
    //         ) : (
    //             <h1>Hi my name is {name}</h1>

    //         )}
    //     </main>
    // )



}

export default Main