using EntityModelsLib;
using System.ComponentModel.DataAnnotations;

namespace HotelBookingApp.Model
{
    public class RoomDTO
    {
        [Required]
        public int RoomCatagoryId { get; set; }

        [Required]
        public int TotalRooms { get; set; }

        [Required]
        public decimal RoomPrice { get; set; }

        [Required]
        public int HotelId { get; set; }

        public static implicit operator Room(RoomDTO roomDto)
        {
            Room room = new Room();
            room.RoomCatagoryId = roomDto.RoomCatagoryId;
            room.TotalRooms = roomDto.TotalRooms;
            room.RoomPrice = roomDto.RoomPrice;
            room.HotelId = roomDto.HotelId;
            return room;
        }
    }
}
