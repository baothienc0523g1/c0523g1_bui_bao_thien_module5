import * as roomService from "../../service/roomService";
import ItemCard from "../core/ItemCard";
import * as houseService from "../../service/houseService";
import * as villaService from "../../service/viilaService";

export function FacilitiesList() {
    return (
        <>
            <div className="container">

                <div className="row mt-4">
                    <h2 className="management-title">Room List</h2>
                    {
                        roomService.findAll().map((room) => ItemCard(room))
                    }
                    <h2 className="management-title">House List</h2>
                    {
                        houseService.findAll().map((room) => ItemCard(room))
                    }
                    <h2 className="management-title">Villa List</h2>
                    {
                        villaService.findAll().map((room) => ItemCard(room))
                    }
                </div>
            </div>
        </>
    );
}