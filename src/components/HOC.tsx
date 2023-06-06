import { useState } from "react"

type BaseProps = {
    primTitle: string,
    secTitle?: string
}

type InjectedProps = {
    toggle: () => void, 
    toggleStatus: boolean
}

const Button = ({primTitle, secTitle, toggle, toggleStatus}: any) => (
    <button onClick = {toggle}>
        {toggleStatus? primTitle : secTitle}
    </button>
)

const withToggle = <BaseProps extends InjectedProps>(PassedComponent: React.ComponentType<BaseProps>) => {
    return (props: BaseProps) => {
        const [toggleStatus, toggle] = useState(false);
        return (
            <PassedComponent
                {...props as BaseProps}
                toggle = {() => toggle(!toggleStatus)}
                toggleStatus= {toggleStatus}
            />
        )
    }
}

const HOC = withToggle(Button);

export default HOC;