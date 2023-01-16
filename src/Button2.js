var count = 10;

function increment() {
    count = count + 1;
    console.log(count + 1);
}

function Button2(){
    return <button onClick={increment}>{count}</button>;
}

export default Button2;