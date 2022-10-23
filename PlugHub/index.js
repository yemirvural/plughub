function printBooking(booking){
    console.log(`${booking.driver.name} was books ChargeStation in ${booking.station.location} and #${booking.station.id} has ID.`)
}
class ChargeStation{
    constructor(id, location){
        this.id = id;
        this.location =location;
    }
}

class Driver{
    constructor(name, location){
        this.name = name;
        this.location = this.location;
        this.bookings = [];
    }
    book(station, origin, destination){
        const booking = new Booking(station, this, origin, destination);
        this.bookings.push(booking);
        return booking;
    }
    printBookingHistory(driver){
        this.bookings.forEach(printBooking);
    }
}
class Booking{
    constructor(station, driver, origin, destination){
        this.station = station;
        this.driver = driver;
        this.origin = origin;
        this.destination = destination;
    }
}
// class RouteCalculate{
//     constructor(origin, destination){
//         this.origin = origin;
//         this.destination = destination;
//     }
    
//     // durationCalculate(){
//     // }
//     // speedCalculate(){
//     // }
// }


const yusuf = new Driver("Yusuf" , "Bolu");
const cstat1 = new ChargeStation(101, "Düzce");
const cstat2 = new ChargeStation(102, "Sakarya");
const cstat3 = new ChargeStation(103, "Kocaeli");

const booking1 = yusuf.book(cstat1, "Bolu", "Düzce");
const booking2 = yusuf.book(cstat2, "Düzce", "Sakarya");
const booking3 = yusuf.book(cstat3, "Sakarya", "Kocaeli");


 
yusuf.printBookingHistory();
