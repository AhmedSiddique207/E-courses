import React from 'react'
function Button(props){
const {children}=props
return(
    <div>
        <button>{children}</button>
    </div>
)
}
export default Button