import { Reservations } from "./Reservations.js"
import { ServiceForm } from "./ServiceForm.js"

export const PartyService = () => {
    return `
    <h1>Button's The Clown Party Service</h1>
    <section class="serviceForm">
        ${ServiceForm()}
    </section>

    <section class="serviceReservations">
        <h2>Party Reservations</h2>
        ${Reservations()}
    </section>
    `
}