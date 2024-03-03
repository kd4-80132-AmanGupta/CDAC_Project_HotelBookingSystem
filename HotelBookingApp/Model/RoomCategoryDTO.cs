using EntityModelsLib;
using System.ComponentModel.DataAnnotations;

namespace HotelBookingApp.Model
{
    public class RoomCategoryDTO
    {
        [Required]
        public string? RoomCategory { get; set; }

        public static implicit operator RoomCategory(RoomCategoryDTO roomCategoryDTO)
        {
            RoomCategory rmCat = new RoomCategory();
            rmCat.RoomCatagory = roomCategoryDTO.RoomCategory;
            return rmCat;
        }
    }
}
