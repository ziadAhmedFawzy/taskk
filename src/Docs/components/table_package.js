import '../style/component_style/table.css'

export default function Table() {
    return (
        <div className="table">
            <h3>Task Management</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Sale and Purchase</td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                        <td>Sale Return</td>
                        <td>-</td>
                        <td>-</td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                    </tr>
                </tbody>
            </table>
            <h3>Visualization</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Reports</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                        <td>Accounting</td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                        <td>E-commerce</td>
                        <td>-</td>
                        <td>-</td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                        <td>Product Delivery</td>
                        <td>-</td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                    </tr>
                </tbody>
            </table>
            <h3>Integarations</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Purchase Return</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                        <td>Expenses</td>
                        <td>-</td>
                        <td>-</td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                    </tr>
                    <tr>
                        <td>E-commerce</td>
                        <td>-</td>
                        <td>-</td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                        <td><i className="checker fa-solid fa-check"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}