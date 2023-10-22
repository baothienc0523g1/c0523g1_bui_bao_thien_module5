import {Room} from "../components/facility/room/Room";

export function findAll() {
    return roomList;
}

const room1 = new Room(1, "Phong 1", 50, 500, 5, "hours", "Massage");
const room2 = new Room(2, "Phong 2", 45, 600, 6, "hours", "Massage");
const room3 = new Room(3, "Phong 3", 55, 700, 7, "hours", "Massage");
const room4 = new Room(4, "Phong 4", 60, 800, 8, "days", "Massage");
const room5 = new Room(5, "Phong 5", 70, 900, 9, "days", "Massage");
const room6 = new Room(6, "Phong 6", 80, 1000, 10, "days", "Massage");

const roomList = [room1, room2, room3, room4, room5, room6];