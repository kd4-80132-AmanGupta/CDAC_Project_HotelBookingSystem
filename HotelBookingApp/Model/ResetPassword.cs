using System.ComponentModel.DataAnnotations;

namespace HotelBookingApp.Model
{
    public class ResetPassword
    {
        [Required]
        [EmailAddress]
        public string EmailId { get; set; }

        [Required]
        public string OTP { get; set; }

        [Required]
        public string NewPassword { get; set; }

    }
}
