import React, {useState} from 'react' 
import Axios from 'axios' 
import "../styles/stylesheet.css"
import gfork from "../styles/images/gfork.png"
import gknife from "../styles/images/gknife.png"
import sfork from "../styles/images/sfork.png"
import sknife from "../styles/images/sknife.png"
import icon_g from "../styles/images/icon_g.jpg"
import icon_s from "../styles/images/icon_s.jpg"
import icon_wod from "../styles/images/icon_wod.jpg"
import icon_mar from "../styles/images/icon_mar.jpg"
import icon_tblc from "../styles/images/icon_tblc.jpg"
import plate from "../styles/images/plate2.png"



const AllDishes = () => {
    const [request, setRequest] = useState(""); 
    const [dishes, setDishes] = useState([]); 
    const [isActive, setIsActive] = useState(true); 
    const [background, setBackground] = useState("wooden");
    const [cutlery, setCutlery] = useState({fork:`${gfork}`, knife:`${gknife}`}); 
    const [isHovering, setIsHovering] = useState(false);
       
    //========== "click me" message =====================/
    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      }; 

    //============= toggle recipies =====================/
    const handleClick = e => { // toggle2
        setIsActive(current => !current);
    };

    //===================================================/
    const myUrl=`https://api.edamam.com/api/recipes/v2?type=public&q=${request}&app_id=fb5fae9e&app_key=bd029aefd6e1edcc85229a07003fb29f` 
    const getData = async () => { 
        const result = await Axios.get(myUrl); 
        setDishes(result.data.hits);
        setRequest(""); 
    };


    const submitRequest = (e) => { 
        e.preventDefault(); 
        getData();
    };

    const changeRequest = (e) => {         
        setRequest(e.target.value) 
    }

        return(
            <div className={background} >

                <div className='icons'>
                <img class="icon" src={icon_g} onClick={()=>setCutlery({fork:`${gfork}`, knife:`${gknife}`})} /> 
                <img class="icon" src={icon_s} onClick={()=>setCutlery({fork:`${sfork}`, knife:`${sknife}`})} /> 
                <img class="icon" src={icon_wod} onClick={()=>setBackground("wooden")} /> 
                <img class="icon" src={icon_mar} onClick={()=>setBackground("marble")} /> 
                <img class="icon" src={icon_tblc} onClick={()=>setBackground("tablecloth")} /> 
                </div>                                    

                <div className='container'>
                    <div class="header">
                        <h1>WHAT YOU WANNA EAT TODAY?</h1>
                        <form onSubmit={submitRequest}> 
                            <input type="text" placeholder="Start entering" 
                            autoComplete="off" onChange={changeRequest} value={request} /> 
                            <button type="submit" value="search">YUM!</button>
                        </form>
                    </div>
                    

                    <div className='main'>
                        <div className="plate">
                        <img id="plate" src={plate} />
                        </div>


                        <div id="fork" className="cutlery">   
                        <img src={cutlery.fork} /> 
                        </div>

                        <div id="knife" className="cutlery">   
                        <img src={cutlery.knife} />
                        </div> 
                        
                        {dishes.map((dish, i)=>{ 
                            const recipe = dish.recipe;                             
                            const ingredients = (recipe.ingredientLines).map((ingredient) => <li>{ingredient}</li>);
                            const healthInfo = (recipe.healthLabels).map((healthLabel) =><>{healthLabel} |</>)
                        
                            return(
                            
                                <div className="card" key={i}>
                                    <h2>{recipe.label}</h2>
                                    <div className={`dish ${isActive ? '' : 'hidden'}`}>                                       
                                        <img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick} src={recipe.image} className="dishPhoto"/>{/* toggle3 */}
                                        {isHovering && <h4>click picture to see!</h4>}
                                    </div>

                                    <div  className={isActive ? 'hidden' : ''}>                                  
                                        <div onClick={handleClick} className="info">
                                            <p>
                                            <h3>YOU'LL NEED:</h3>
                                            <h3>{ingredients}</h3>
                                            <br></br>
                                            <br></br>
                                            
                                            </p>
                                            <a href={recipe.url} target="_blank">read more</a>
                                        </div>
                                    </div>         
                                                            
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>                 
            </div> 
        )
        
}

export default AllDishes