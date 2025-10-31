import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";

export function AdminDasboardPage() {

return (

<main className='min-page-height'>

    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal  text-body-primary">"ADMINISTRACIJA" PAGE</h1>
        <p className="fs-5 text-body-primary">Quickly build an effective pricing table for your potential customers with
            this
            Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
    </div>

</main>

)
}