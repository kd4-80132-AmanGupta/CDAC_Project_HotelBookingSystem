using EntityModelsLib;
using System.ComponentModel.DataAnnotations;

namespace HotelBookingApp.Model
{
    public class BookingDTO
    {
        [Required]
        public int HotelId { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        public int RoomId { get; set; }
        [Required]
        public DateTime CheckIn { get; set; }
        [Required]
        public DateTime CheckOut { get; set; }
        [Required]
        public decimal BookingPrice { get; set; }
        [Required]
        public int NoOfRoom { get; set; }

        public static implicit operator Booking(BookingDTO booking)
        {
            Booking obj = new Booking();
            obj.HotelId = booking.HotelId;
            obj.UserId = booking.UserId;
            obj.RoomId = booking.RoomId;
            obj.BookingPrice = booking.BookingPrice;
            obj.NumberOfRoom = booking.NoOfRoom;
            obj.CheckIn = booking.CheckIn;
            obj.CheckOut = booking.CheckOut;
            return obj;
        }

    }
}
