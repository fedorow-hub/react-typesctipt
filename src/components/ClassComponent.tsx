import { Component, ReactNode } from "react";

type ClassComponentState = {
    count: number
}

type ClassComponentProps = {
    title?: string
}

class ClassComponent extends Component<ClassComponentProps, ClassComponentState> {
    
    constructor(props: ClassComponentProps) {
        super(props)

        this.state = {
            count: 0,
        }        
    }

    static defaultProps: ClassComponentProps = {
        title: "Default counter: "
    }

    static getDerivedStateFromProps(props: ClassComponentProps, state: ClassComponentState): ClassComponentState | null {
        return false ? {count: 2}: null;
    }

    componentDidMount(): void {
        
    }

    shouldComponentUpdate(nextProps: ClassComponentProps, nextState: ClassComponentState): boolean {
        return true;
    }
    

    handleClick = (e:React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        console.log(`${e.clientX}, ${e.clientY}`)
        this.setState(({count}) => ({
            count: ++count,
        }));        
    }

    render() {        
        return(
            <div>
                <h1>{this.props.title}{this.state.count}</h1>
                <button onClick={this.handleClick}>+1</button>
                <a href="#" onClick={this.handleClick}>Link</a>
            </div>
        )
    }
}

export default ClassComponent;