class Room {
    constructor(roomNumber, roomSize, price) {
        this.roomNumber = roomNumber;
        this.roomSize = roomSize;
        this.price = price;
    }
    showInfo() {
        return `Room Number: ${this.roomNumber}, Size: ${this.roomSize} sqm, Price: $${this.price} per night`;
    }
}