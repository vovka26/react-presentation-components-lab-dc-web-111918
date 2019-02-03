import React from 'react'

const SimplerComponent = (props) => {
    return <div onClick={props.handleClick}>I am just happy</div>
}

export default SimplerComponent


// It should receive one property called handleClick that performs some sort of action in response to a click — your choice!

// When you've finished this component, take a moment to compare it to the previous presentational component we wrote. See how much more stable it is? It has no ability to change its output internally. We can always know, based on the props that we provide, what type of component it will produce. Note, as well, that this doesn't mean that the component lacks interactivity. We can actually determine a wide variety of click behaviors on the component just by providing a different callback. It's just that the component itself cannot determine its behavior. This kind of "simpleness" is actually a good thing because it makes our component more predictable and easier to maintain.

