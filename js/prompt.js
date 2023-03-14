const showAlert = () => {
    alert("This is a alert");
}

const lendMoney = () => {
    const result = confirm("Lend me 500 taka");
    console.log(result);
    if (result === true) {
        alert("Buke ay");
    } else {
        alert("Ok take care");
    }
}

const getName = () => {
    const name = prompt("Tell me your name");
    console.log(name);
    if (name === null) {
        alert("Naam ditei hobe");
    } else {
        console.log(name, "Welcome to the world!");
    }
}