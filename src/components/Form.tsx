import React, { Component } from "react";

type Position = {
    id: string,
    value: string,
    title: string,
}

type FormState = {
    inputText: string,
    textAreaText: string,
    selectText: string,
    showData: {
        name: string,
        text: string,
        position: string
    }
}

const POSITIONS: Array<Position> = [
    {
        id: 'fd',
        value: 'Front-end-developer',
        title: 'Front-end-developer',
    },
    {
        id: 'bd',
        value: 'Back-end-developer',
        title: 'Back-end-developer',
    }
];

const DEFAULT_SELECT_VALUE:string = POSITIONS[0].value;

const styles:React.CSSProperties ={display: 'block', marginBottom: '10px'};


class Form extends Component<{}, FormState> {

    state = {
        inputText: '',
        textAreaText: '',
        selectText: DEFAULT_SELECT_VALUE,
        showData: {
            name: '',
            text: '',
            position: ''
        }
    }

    private rootRef = React.createRef<HTMLSelectElement>();

    handleInputChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        const {target: {value: inputText}} = e;
        this.setState({inputText});
    }

    handleTextAreaChange = (e:React.ChangeEvent<HTMLTextAreaElement>):void => {
        const {target: {value: textAreaText}} = e;
        this.setState({textAreaText});
    }

    handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>):void => {
        const {target: {value: selectText}} = e;
        this.setState({selectText});
    }

    handleShow = (e:React.MouseEvent<HTMLButtonElement>):void => {
        e.preventDefault();
        const {inputText, textAreaText, selectText} = this.state;

        this.setState({
            inputText: '',
            textAreaText: '',
            selectText: DEFAULT_SELECT_VALUE,
            showData: {
                name: inputText,
                text: textAreaText,
                position: selectText
            }
        })
    };

    render() {
        const {inputText, textAreaText, selectText, showData} = this.state;
        const {name, text, position} = showData;
        return(
            <>
            <form >
                <label style={styles}>
                    Name:
                    <input                     
                        type="text" 
                        value={inputText}
                        onChange={this.handleInputChange}/>                    
                </label>
                <label style={styles}>
                    Text:
                    <textarea 
                        value={textAreaText}
                        onChange={this.handleTextAreaChange}/>                    
                </label>
                <select 
                    style={styles}
                    value={selectText}
                    onChange={this.handleSelectChange}
                    ref = {this.rootRef}
                >
                    {POSITIONS.map(({id, value, title})=>(
                        <option key={id} value={value}>
                            {title}
                        </option>
                    ))}
                </select>                    
                <button onClick={this.handleShow}>Show Data</button>
                <h2>{name}</h2>
                <h3>{text}</h3>
                <h3>{position}</h3>
            </form>

            </>
            
            
        )
    }
}

export default Form;