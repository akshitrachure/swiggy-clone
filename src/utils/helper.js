export function filterData(inputText, restaurants){
    const result = restaurants.filter((restaurant)=>(
            
            restaurant?.info?.name?.toLowerCase()?.includes(inputText?.toLowerCase())
            
        
    ))
    //console.log(restaurants[0].info.name);
    return result;
}