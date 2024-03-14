function Random(){
    let random =  Math.random() * 100;

    return <h1> Random Number is : {Math.floor(random)}</h1>
}

export default Random;