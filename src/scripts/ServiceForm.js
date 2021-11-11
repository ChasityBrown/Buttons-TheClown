import { sendReservation } from "./dataAccess.js"

export const ServiceForm = () => {
    let html =  `
    <div class="field">
        <label class="label" for="serviceParent">Parent's Name</label>
        <input type="text" name="serviceParent" class="input" />
    </div>
    <div class="field">
        <label class="label" for="serviceChild">Child's Name</label>
        <input type="text" name="serviceChild" class="input" />
    </div>
    <div class="field">
        <label class="label" for="serviceAddress">Address</label>
        <input type="text" name="serviceAddress" class="input" />
    </div>
    <div class="field">
        <label class="label" for="servicePartySize">Party Size</label>
        <input type="number" name="servicePartySize" class="input" />
    </div>
    <div class="field">
        <label class="label" for="serviceLengthofTime">Length of Time (in hours)</label>
        <input type="text" name="serviceLengthofTime" class="input" />
    </div>
    <div class="field">
        <label class="label" for="serviceDate">Date needed</label>
        <input type="date" name="serviceDate" class="input" />
    </div>

    <button class="button" id="submitReservation">Submit Reservation</button>
    `

    return html
}
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        // Get what the user typed into the form fields
        const userParent = document.querySelector("input[name='serviceParent']").value
        const userChild = document.querySelector("input[name='serviceChild']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userPartySize = document.querySelector("input[name='servicePartySize']").value
        const userLengthofTime = document.querySelector("input[name='serviceLengthofTime']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parent: userParent,
            child: userChild,
            address: userAddress,
            partySize: userPartySize,
            resLength: userLengthofTime,
            date: userDate
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})

