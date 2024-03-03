using EntityModelsLib;
using HotelBookingApp.Model;
using Microsoft.AspNetCore.Mvc;
using RepositoryLib;

namespace HotelBookingApp.Controllers
{
    [ApiController]
    public class RoomCategoryController : ControllerBase
    {
        IRoomCategoryRepository service = new RoomCategoryRepository();

        [HttpPost]
        [Route("roomcatagory/addRoomCategory")]
        public bool AddRoomCategory(RoomCategoryDTO rmCatDto)
        {
            RoomCategory rmCat = rmCatDto;
            return service.AddRoomCategory(rmCat);
        }
        [HttpPost]
        [Route("roomcatagory/updateRoomCategory/{roomCatId}")]
        public bool UpdateRoomCategory(RoomCategoryDTO rmCatDto, int roomCatId)
        {
            RoomCategory rmCat = rmCatDto;
            return service.ModifyRoomCategory(rmCat, roomCatId);
        }
    }
}
