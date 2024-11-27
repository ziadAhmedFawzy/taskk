import { Link } from "react-router-dom";

export default function Error() {
    return (
        <>
        <div>this is page not found (404)</div>
        <Link to='/'>return to home</Link>
        </>
    )
}