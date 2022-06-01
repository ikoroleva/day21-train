import { Seat } from "../Seat/Seat"

export const CarriageRow = (props) => {

    return (
        <div className="carriage-row">
            {props.seatsNums[0]}
            {props.seatsNums[1]}
            <div className="aisle-spacer"></div>
            {props.seatsNums[2]}
            {props.seatsNums[3]}
        </div>
    )
}