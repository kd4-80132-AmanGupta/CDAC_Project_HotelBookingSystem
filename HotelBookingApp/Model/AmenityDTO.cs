using EntityModelsLib;

namespace WebApiFinalProject.Models
{
    public class AmenityDTO
    {

        public String? AmenityDesc { get; set; }

        public static implicit operator Amenities(AmenityDTO amenityDto)
        {
            Amenities amty = new Amenities();
            amty.AmenityDesc = amenityDto.AmenityDesc;
            return amty;
        }


    }
}