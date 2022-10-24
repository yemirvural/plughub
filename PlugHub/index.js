function printBooking(booking){
    console.log(`${booking.driver.name} now in ${booking.driver.location} and books ChargeStation at ${booking.station.location} and #${booking.station.id} has ID. (( Driver ---> Status: ${booking.driver.status.state}, ${booking.driver.status.statusCode}, ${booking.driver.status.statusName})) && (( Station ---> Status: ${booking.station.status.state}, ${booking.driver.status.statusCode}, ${booking.driver.status.statusName}))`);
    booking.driver.updateLocation(booking.destination);
}
class ChargeStation{
    constructor(id, location, status){
        this.id = id;
        this.location =location;
        this.status = status;
    }
    updateStatus(status){
        this.status = status;
    }
}

class Driver{
    constructor(name, location, status){
        this.name = name;
        this.location = location;
        this.bookings = [];
        this.status = status;

    }
    book(station, origin, destination, status){
        const booking = new Booking(station, this, origin, destination);
        this.bookings.push(booking);
        this.updateStatus(states.stat1)
        station.updateStatus(states.stat2)
        return booking;
    }
    updateLocation(location){
        this.location = location;
    }
    printBookingHistory(driver){
        this.bookings.forEach(printBooking);
    }
    updateStatus(status){
        this.status = status;
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

const states ={
    stat1:
        {
          state: "Active", statusCode: 200, statusName: "Available"
        },
    stat2:
        {
          state: "Passive", statusCode: 405, statusName: "Awaiting for Charge"
        },
    stat3:
        {
          state: "Passive", statusCode: 416, statusName: "Charging"
        },
    stat4:
        {
          state: "Passive", statusCode: 420, statusName: "Faulty"
        }
};

const yusuf = new Driver("Yusuf" , "Bolu", "Active");

const cstat1 = new ChargeStation(101, "Düzce", "Active");
const cstat2 = new ChargeStation(102, "Sakarya", "Active");
const cstat3 = new ChargeStation(103, "Kocaeli", "Active");
const cstat4 = new ChargeStation(104, "İstanbul", "Active");


const booking1 = yusuf.book(cstat1, "Bolu", "Düzce");
const booking2 = yusuf.book(cstat2, "Düzce", "Sakarya");
const booking3 = yusuf.book(cstat3, "Sakarya", "Kocaeli");



yusuf.printBookingHistory();

 
