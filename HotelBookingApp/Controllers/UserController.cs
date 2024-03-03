using EntityModelsLib;
using HotelBookingApp.Model;
using Microsoft.AspNetCore.Mvc;
using RepositoryLib;

namespace HotelBookingApp.Controllers
{
    [ApiController]
    public class UserController : ControllerBase
    {
        MembershipRepository service;
        public UserController()
        {
            service = new MembershipRepository();
        }
        [HttpGet]
        [Route("/users/allUsers")]
        public IEnumerable<User> GetAllUsers()
        {
           IEnumerable<User> list =  service.GetAllUsers();
            if (list != null)
            {
                return list;
            }
            return null;
        }
        [HttpGet]
        [Route("/users/getByEmail/{email}")]
        public User GetUserByEmail(string email)
        {
           User user = service.GetUserByEmail(email);
            return user;
        }

        [HttpGet]
        [Route("/users/getByMobileNo/{number}")]
        public User GetUserByMobileNo(string number)
        {
            User user = service.GetUserByMobileNo(number);
            return user;
        }
        [HttpPost]
        [Route("/users/updateUser/{userid}")]
        public bool UpdateUser(UserDTO user, int userid)
        {
            if (ModelState.IsValid)
            {
                bool flag = service.UpdateUser(user,userid);
                return flag;
            }
            return false;
        }

        [HttpPost]
        [Route("/users/deleteUser")]
        public bool DeleteUser(string emailId)
        {
            bool flag = service.DeleteUser(emailId);
            return flag;
        }

        [HttpGet]
        [Route("/users/getOnlineUsers")]
        public int GetOnlineUsers()
        {
            int listOfOnlineUsers = service.GetNumberOfUsersOnline();

            if (listOfOnlineUsers != 0) { return listOfOnlineUsers; }
            return listOfOnlineUsers;
        }
    }
}

