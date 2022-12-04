
function MyRecipesComponent({label,cuisineType,image,dinner}){
    return(
        <div>
            <div className="container">
                <div className="heading">
                    <div class="title">
                     <h2>{label}</h2>
                     <h2>{cuisineType}</h2>
                </div>
                      <img className="picture" src={image} width="200px"alt="bild"/>
             </div>   
            </div>
            
            <ul className="list">
                {dinner.map((ingredient,index)=>(
                    <li key={index}><img src="https://img.freepik.com/premium-vector/bow-tie-tuxedo-utensil-restaurant-logo_57043-22.jpg?w=1800"width="50px"alt="bild"/>{ingredient}</li>
                ))}
               
            </ul>
        </div>
    )
}
export default MyRecipesComponent;