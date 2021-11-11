import { fetchReservations } from "./dataAccess.js"
import { PartyService } from "./PartyService.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations().then(
        () => {
    mainContainer.innerHTML = PartyService()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    () => {
        render()
    }
)