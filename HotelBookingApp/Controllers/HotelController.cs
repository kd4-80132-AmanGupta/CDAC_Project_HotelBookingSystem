using EntityModelsLib;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RepositoryLib;
using WebHotelBooking.Models;

namespace HotelBookingApp.Controllers
{
    
    [ApiController]
    public class HotelController : ControllerBase
    {
        IHotelRepository service = null;
        public HotelController()
        {
            service = new HotelRepository();
        }

        [HttpPost]
        [Route("/hotels/add")]
        public bool AddHotel(HotelDTO hoteldto)
        {
            Hotel hotel = hoteldto;
            service.AddHotel(hotel);
            return true;
        }
        [HttpGet]
        [Route("/hotels/getAll")]
        public IEnumerable<Hotel> GetAllUsers()
        {
            IEnumerable<Hotel> list = service.GetAllHotels();
            if (list != null)
            {
                return list;
            }
            return null;
        }
        [HttpGet]
        [Route("/hotels/gethotel/{hotelId}")]
        public Hotel GetHotelById(int hotelId)
        {
            return service.GetHotel(hotelId);
        }
        [HttpGet("/hotel/GetHotelByManagerId/{id}")]
        public IEnumerable<Hotel> GetHotelByManagerId(int id)
        {
            IEnumerable<Hotel> htls = service.GetHotelByManagerId(id);
            return htls;
        }
        [HttpGet]
        [Route("/hotel/getHotelsByUserId/{userId}")]
        public IActionResult GetHotelsByUserId(int userId)
        {
            var result = service.GetAllHotelsByUserId(userId);
            return Ok(result);
        }
        [HttpPost]
        [Route("/hotels/updateHotel/{hotlId}")]
        [Authorize]
        public bool Modify(HotelDTO hotelDto, int hotlId)
        {
            
            Hotel htl = hotelDto;
            return service.Modify(htl, hotlId);
        }
        [HttpPost]
        [Route("/hotels/deleteHotel/{hotelid}")]
        public int DeleteUser(int hotelid)
        {
            int affectedRows = service.RemoveHotel(hotelid);
            return affectedRows;
        }
    }
}
