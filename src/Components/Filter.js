
export const Filter = ({onChange})=>(
    <div className= "filter-wrapper">
        <select data-testid = "htfilter" name = "height" onChange = {onChange} className = "filter-height rounded table-hover form-select form-select-lg mb-3" aria-label=".form-select-lg example" >
            <option value = "0">Select Height</option>
            <option value = "100">More than 100 ft</option>
            <option value = "200">More than 200 ft</option>
            <option value = "300">More than 300 ft</option>
            <option value = "400">More than 400 ft</option>
        </select>
    </div>
    
);







//destructuring props {onChange}
 {/* Thus, we can see there is no way to pass props from a child component to a parent component.
 However, we can always pass around functions from the parent to child component. (as onChange here) 
 The child component can then make use of these functions. 
 The function when onvoked can then update the state in a parent component.
  Once our state gets changed, it is passed down as props again. Thus, all the relevant components get rendered again.
 A similar pattern can be used when we have multiple page components in our React app. 
 If we want to pass data from one page to the other,
  we can lift up the state to the parent component (in most cases, the App component). 
  The parent would have all the individual page components as its child. 
  Thus, the data will be managed as state in the topmost level component and at the same time,
 we can pass it to any of the child components. */}

 // when there is change, ie. we select a value then that gets updated in App.js
