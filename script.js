// const priceReduce = async () => {
// try{
// let ApiCall = await fetch('https://dummyjson.com/products');
// let price = await ApiCall.json();


// let pisa=[]
// let discount=price.products.map((dollar)=>{
// dollar.price=dollar.price-2;
// pisa.push(dollar);
// })
// console.log(pisa);

// }catch (error){
//     console.log("Internet Connection Error");
// };

// }

// priceReduce();

// const fetchArray =async()=>{
    
//     let Apicall = await fetch("https://dummyjson.com/products");
//     let total= await Apicall.json();
//     let declare=total.products.price
//     console.log(declare)

//   let  data=[];
//     let covert=total.products.filter((a)=>{
//     if( a.price = a.price>10){
//     data.push(a)  
//     }
//     console.log(data)
//    if ( a.price = a.price<10){
//      data.push(a)
//    }
//     });
//     console.log(data)
// }
// fetchArray();

// let dollar = [];
// const above_below = async () => {
//     try{
//     let call  = await fetch('https://dummyjson.com/products')
//     let apiCall = await call.json();
//     let items = items.products.price;
//     }catch{
//         console.log('Internet Connection Error')
//     }
// };



// const fil = items.products.price.filter((e)=>{
//     if(e.price < 10){
//         dollar.push(e)
//     }
// })
// console.log(dollar)

// above_below();


const above_below = async () => {
    let call = await fetch('https://dummyjson.com/products')
    let convert = await call.json();
    let totall = convert.product.price;
}