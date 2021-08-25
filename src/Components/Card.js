export const Card = ({rocket}) =>( 

    //no need of writing keyword return explicitly in => fat arrow function when using => or =>()
//destructuring props to {rocket}
    <div class = "col-sm-6"> {/* ie in  1 row there will be 2 div /columns */}
        <div className="card"  key = {rocket.id} >
                 <img 
                    src={rocket.flickr_images[0]}
                    className="card-img-top" 
                    alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{rocket.name}</h5>
                     <p className="card-text">{rocket.description}</p>
                    
                     <div className= "container">
                        <div className = "row justify-content-end" >
                             <div className = "col"/>
                                 <a href="#"  data-target={`#popup${rocket.id}`} className="btn  btn-outline-info" data-toggle="modal">View More</a>
                {/* data target has same id as that of modal, but while referring , we use #*/}
                            
                        </div> 
                             
                         </div>
     
                </div> 
  
        </div>
    </div>
// we are targetting exampleModal from the App.js

);



