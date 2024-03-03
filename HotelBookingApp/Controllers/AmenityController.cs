using EntityModelsLib;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RepositoryLib;
using WebApiFinalProject.Models;
namespace WebApiFinalProject.Controllers
{
    //[Route("Api/[controller]")]
    [ApiController]
    public class AmenityController : ControllerBase
    {
        IAmenityRepository service = new AmenityRepository();

        // GET: api/<AmenityController>
        [HttpGet]
        [Route("amenity/GetAll")]
        public IEnumerable<Amenities> GetAllAmenities()
        {
            return service.GetAllAmenities();
        }

        // GET api/<AmenityController>/5
        [HttpGet("amenity/GetById{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AmenityController>
        [HttpPost]
        [Route("amenity/AddAmenity")]
        public void AddAmenity([FromBody] AmenityDTO amenity)
        {
            Amenities amty = amenity;
            service.AddAmenity(amty);
        }

        // PUT api/<AmenityController>/5
        [HttpPut("amenity/UpdateAmenity{id}")]

        public void UpdateAmenity(int AmenityId, [FromBody] Amenities amenities)
        {
            Amenities amty = amenities;
            service.UpdateAmenity(AmenityId, amenities);
        }

        // DELETE api/<AmenityController>/5
        [HttpDelete("amenity/DeleteAmenity{id}")]

        public void Delete(int AmenityId)
        {
            service.DeleteAmenity(AmenityId);
        }
    }
}