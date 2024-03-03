using EntityModelsLib;
using Microsoft.AspNetCore.Mvc;
using RepositoryLib;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAppFinalProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        public IRoleRepository service;

        public RoleController()
        {
            service = new RoleRepository();
        }


        //Get All Role
        [HttpGet("/getAllRole")]
        public IEnumerable<Role> GetAllRole()
        {
            return service.GetAllRoles();
        }

        //check is specified User In Role
        [HttpGet("/isUserInRole")]
        public bool isUserInRole(string userName, string roleName)
        {
            return service.IsUserInRole(userName, roleName);
        }

        //Adding a New Role
        [HttpPost("/addRole")]
        public bool AddRole([FromBody] string roleName)
        {
            return service.CreateRole(roleName);
        }


        //Deleting a role
        [HttpDelete("/deleteRole/{roleId}")]
        public bool DeleteRole(int roleId)
        {
            return service.DeleteRole(roleId);
        }
    }
}