type car = {
    manufacture: string
    model: string
    [key: string]: any;
}
function Createcar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}

const mycar: car  = Createcar("toyota", "corolla", {color: "silver" ,  year: "2024" })
console.log(mycar)