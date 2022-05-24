import React from 'react';

const Main = () => {
    const name = "AJ";
    const loading = false


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


    // ternary operator
    
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

    return (
        <main>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <h1>Hi my name is {name}</h1>

            )}
        </main>
    )

}

export default Main