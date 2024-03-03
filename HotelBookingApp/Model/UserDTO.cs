using EntityModelsLib;
using System.ComponentModel.DataAnnotations;

namespace HotelBookingApp.Model
{
    public class UserDTO
    {
        [Required]
        public string? Name { get; set; }

        [Required]
        public string? EmailId { get; set; }

        [Required]
        public string? MobileNo { get; set; }

        public static implicit operator User(UserDTO usrDto)
        {
            User usr = new User(); ;
            usr.Name = usrDto.Name;
            usr.EmailId = usrDto.EmailId;
            usr.MobileNo = usrDto.MobileNo;
            return usr;
        }
    }
}
