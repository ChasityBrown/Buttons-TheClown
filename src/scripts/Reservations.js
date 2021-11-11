import { getReservations, denyReservation } from "./dataAccess.js"
const mainContainer = document.querySelector("#container")
const convertReservationToListElement = (reservation) => {
    return `<li>${reservation.parent}
    <button class="reservation__deny"
                    id="reservation--${reservation.id}">
                Deny
            </button>
    </li>`
}

export const Reservations = () => {
    const reservations = getReservations()

    let html = `
        <ul>
            ${
                reservations.map(convertReservationToListElement).join("")
            }
        </ul>
    `

    return html
}
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,requestId] = click.target.id.split("--")
        denyReservation(parseInt(requestId))
    }
})