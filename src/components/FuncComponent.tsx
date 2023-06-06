
type TypeProps = {
    title: string,
    test?: string
}
const FuncComponent = ({title, test = "test"} : TypeProps) => {
    return<h1>{title}, {test}</h1>
}

export default FuncComponent;