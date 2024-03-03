using EntityModelsLib;
using System.ComponentModel.DataAnnotations;

namespace WebHotelBooking.Models
{
    public class HotelDTO
    {
        [Required]
        public int UserId { get; set; }
         
        [Required]
        public string? HotelName { get; set; }

        [Required]
        [StringLength(maximumLength: 2)]
        public string? State { get; set; }

        [Required]
        [StringLength(maximumLength: 6)]
        public string? PinCode { get; set; }

        [Required]
        public string? Address { get; set; }

        [Required]
        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        public string? Description { get; set; }

        [Required]
        public string? HotelUrl { get; set; }

        public static implicit operator Hotel(HotelDTO hotel)
        {
            Hotel htl = new Hotel();
            htl.ManagerId = hotel.UserId;
            htl.HotelName = hotel.HotelName;
            htl.State = hotel.State;
            htl.PinCode = hotel.PinCode;
            htl.Address = hotel.Address;
            htl.Email = hotel.Email;
            htl.PinCode = hotel.PinCode;
            htl.Description = hotel.Description;
            htl.HotelUrl = hotel.HotelUrl;
            return htl;
        }

    }
}