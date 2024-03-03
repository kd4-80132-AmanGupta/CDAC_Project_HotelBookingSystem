using System.ComponentModel.DataAnnotations;

namespace HotelBookingApp.Model
{
    public class ChangePassword
    {
        [Required]
        [EmailAddress]
        public string EmailID { get; set; }

        [Required]
        public string OldPassword { get; set; }

        [Required]
        public string NewPassword { get; set; }
    }
}
