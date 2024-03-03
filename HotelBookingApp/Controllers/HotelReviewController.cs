using EntityModelsLib;
using Microsoft.AspNetCore.Mvc;
using RepositoryLib;
using WebAppFinalProject.Models;


namespace WebAppFinalProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelReviewController : ControllerBase
    {
        public HotelReviewRepository service;
        public HotelReviewController()
        {
            service = new HotelReviewRepository();
        }

        //get All HotelReview by {hotelId}
        [HttpGet("/getAllHotelReview/{hotelId}")]
        public IEnumerable<HotelReview> GetAllHotelReviewByHotelId(int hotelId)
        {
            return service.GetAllReviewByHotelId(hotelId);
        }

        //get All Hote//get All HotelReview by {userId}lReview by {userId}
        [HttpGet("/getAllReview/{userId}")]
        public IEnumerable<HotelReview> GetAllHotelReviewByUserId(int userId)
        {
            return service.GetAllReviewByUserId(userId);
        }

        // POST api/<HotelReviewController>
        [HttpPost("/AddHotelReview")]
        public bool AddHotelReview([FromBody] HotelReviewDTO hotelReviewDTO)
        {
            HotelReview hotelReview = hotelReviewDTO;
            return service.AddHotelReview(hotelReview);
        }


        //get HotelReview By Id then update 
        [HttpGet("/getHotelReview/{hotelReviewId}")]
        public HotelReview getHotelReviewById(int hotelReviewId)
        {
            HotelReview hr = service.GetHotelReviewById(hotelReviewId);
            return hr;
        }


        //here Updating Hotel Review By id and by passing updated data
        [HttpPost("/updateHotelReview/{hotelReviewId}")]
        public bool UpdateHotel(HotelReviewDTO hotelReviewDTO, int hotelReviewId)
        {
            HotelReview htlReview = hotelReviewDTO;
            return service.ModifyHotelReview(htlReview, hotelReviewId);
        }



        [HttpDelete("/deleteHotelReview/{hotelReviewId}")]
        public bool Delete(int hotelReviewId)
        {
            return service.DeleteHotelReviewById(hotelReviewId);
        }
    }
}
