export default function Logo(props) {
    return (
        <img style={{margin: props.space}} width={props.size} src={require('../resources/logo/logo/logo.png')} alt='logo' />
    )
}