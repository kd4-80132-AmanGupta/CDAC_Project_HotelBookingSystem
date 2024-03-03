using System.ComponentModel.DataAnnotations;

namespace HotelBookingApp.Model
{
    public class SignUp
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string EmailId { get; set; }
        [Required]
        public string MobileNo { get; set; }
        [Required]
        public int RoleId { get; set; }

    }
}
