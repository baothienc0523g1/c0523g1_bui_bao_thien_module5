import {HouseList} from "./house/HouseList";
import {RoomList} from "./room/RoomList";
import {VillaList} from "./villa/VillaList";

export function FacilitiesList() {
    return(
        <>
            <RoomList/>
            <HouseList/>
            <VillaList/>
        </>
    );
}