const render = (reactElement, container) => {
    const createDom = document.createElement(reactElement.type);
    //Instead of repeating for n attributes we will use for loop
    // createDom.setAttribute('href', reactElement.props.href);
    // createDom.setAttribute('target', reactElement.props.target);
    for (prop in reactElement.props) {
        createDom.setAttribute(prop, reactElement.props[prop]);
    }
    createDom.innerHTML = reactElement.childeren;

    container.appendChild(createDom);
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank",
        class:"style"
    },
    childeren:"click me"
}

const container = document.getElementById('root');
render(reactElement, container);

/*
This is how react works behind the scene.It has its own render function which takes object in specified format and then renders it using virtual dom which comes from react-DOM.
React creates a single page website.
*/