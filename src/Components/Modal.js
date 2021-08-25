export const Modal = ({rocket}) =>(
    <div class="modal fade"
    id={`popup${rocket.id}`}
    tabindex="-1" 
    aria-labelledby="exampleModalLabel"
    aria-hidden="true">

         <div className="modal-dialog modal-lg">
              <div className="modal-content">
                   <div className="modal-header">
     {/*aria-labelledby attribute establishes relationships between objects and their label(s),
      and its value should be one or more element IDs */}
                      <h5 className="modal-title" id="exampleModalLabel">{rocket.name}</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                      </button>
                     </div> {/*  header div closes */}

                    <div className="modal-body">

                      {/*  carousel used for the sliding image purpose */}
    
                      <div id={`carousel${rocket.id}Controls`} class="carousel slide" data-ride="carousel">

                      <div class="carousel-inner">


                        <div class="carousel-item active"> 
                          <img src={rocket.flickr_images[1]} class="d-block w-100" alt="..."/>
                        </div>

                        <div class="carousel-item">
                          <img src={rocket.flickr_images[0]} class="d-block w-100" alt="..."/>
                        </div>
                        
                      </div> {/* div of carousel-inner ie the images ended */}

                      {/* the control part using the same id in href */}

                      <a class="carousel-control-prev" href={`#carousel${rocket.id}Controls`} role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href={`#carousel${rocket.id}Controls`} role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>

                    </div>  {/* div of carousel ended */}

                      {/* div for the description part
                      1 row contains 3 col div each occupying 4 columns ie 3*4  =12 */}
                        <div className = "row rocket-info">
                            <div className = "col-sm-4">
                                <h4>Height</h4>
                                <p>{rocket.height.feet} Feet</p>
                            </div>
                            <div className = "col-sm-4">
                                <h4>Diameter</h4>
                                <p>{rocket.diameter.feet} Feet</p>
                            </div>
                            <div className = "col-sm-4">
                                <h4>Mass</h4>
                                <p>{rocket.mass.kg/1000} Tonnes</p>
                            </div>
                            <div className = "col-sm-4">
                                <h4>First Flight</h4>
                                <p>{rocket.first_flight}</p>
                            </div>
                            <div className = "col-sm-4">
                                <h4>Active</h4>
                                <p>{rocket.active ? `Yes` : `No`}</p>
                            </div>
                            <div className = "col-sm-4">
                                <h4>Cost/Launch</h4>
                                <p>{rocket.cost_per_launch/1000000}Million</p>
                            </div>
                        </div>
                        <p>{rocket.description}</p>

                        {/* btn-block provides entire width button
                         _blank Opens the linked document in a new window or tab */}
                        <a href= {rocket.wikipedia} className = "btn btn-primary btn-block" target = "_blank" rel = "noreferrer"> Learn More</a>
                      </div>
   
    </div>
    </div>
    </div>
)