import React, { Component } from "react"
import ReactDOM from "react-dom";

type PortalProps = {
    children: React.ReactNode
}

class Portal extends Component<PortalProps> {
    private el: HTMLDivElement = document.createElement('div');

    public componentDidMount(): void {
        document.body.appendChild(this.el);
    }

    public componentWillUnmount(): void {
        document.body.removeChild(this.el);
    }

    public render():React.ReactElement<PortalProps> {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

type MyComponentState = {
    counter: number
}

class MyComponent extends Component<{}, MyComponentState>{
    state = {
        counter: 0
    }

    handleClick = ():void => {
        this.setState(({counter}) => ({
            counter: counter +1 
        }))
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                <p>Click: {this.state.counter}</p>
                <span>Text</span>
                <Portal>
                    <div>TEXT PORTAL</div>
                    <button>Click</button>
                </Portal>

            </div>
        )
    }
}

export default MyComponent;