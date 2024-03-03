using HotelBookingApp.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using RepositoryLib;
using System.IdentityModel.Tokens.Jwt;
using System.Net.NetworkInformation;
using System.Security.Claims;
using System.Text;
using System.Text.RegularExpressions;
using System.Net.Mail;
using EntityModelsLib;
using System.Net;

namespace HotelBookingApp.Controllers
{
    
   
        [Route("api/[controller]")]
        [ApiController]
        public class AccountController : ControllerBase
        {
        IConfiguration config;
            MembershipRepository service;
            public AccountController(IConfiguration config)
            {
            this.config = config;
                service = new MembershipRepository();
            }

        //[HttpPost]
        //[Route("/users/login")]
        //public bool Login(Login value)
        //{
        //    bool result = false;
        //    if (ModelState.IsValid)
        //    {
        //        result = service.ValidUser(value.EmailId, value.Password);
        //    }
        //    return result;

        //}
        [HttpPost]
        [AllowAnonymous]

        [Route("/User/Login")]

        public IActionResult Post([FromBody] Login value)
        {
            IActionResult response = Unauthorized();
            bool result = false;
            var obj = service.GetUserByEmail(value.EmailId);
            int id = obj.RoleId;
            int userId = obj.UserId;
            string name = obj.Name;

            if (ModelState.IsValid)
            {
                result = service.ValidUser(value.EmailId, value.Password);

                if (result) 
                {
                    var token = GenerateJwtToken(value.EmailId); 
                    return Ok(new { Token = token, RoleId = id, UserId = userId, Name = name });
                }
            }

            return response;
        }

        private string GenerateJwtToken(string email)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
      new Claim(JwtRegisteredClaimNames.Sub, email),
      new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())

            };

            var token = new JwtSecurityToken(
                config["Jwt:Issuer"],
                config["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(15),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        [HttpPost]
        [Route("/users/signup")]
        public bool SignUp(SignUp value)
        {
            bool result = false;
            if (ModelState.IsValid)
            {
                result = service.CreateUser(value.Name, value.EmailId, value.Password, value.MobileNo, value.RoleId);
            }
            return true;
        }
        [HttpPost]
        [Route("/users/ChangePassword")]
        public bool ChangePassword(ChangePassword value)
        {
            if (ModelState.IsValid)
            {
                bool flag = service.ChangePassword(value.EmailID, value.OldPassword, value.NewPassword);
                return flag;
            }
            return false;
        }

        [HttpPost]
        [Route("/users/OtpGenerate/{emailId}")]
        public string OtpGenerate(string emailId)
        {
            Regex regx = new Regex("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$");
            bool match = regx.IsMatch(emailId);
            if (match)
            {
                string TempOtp = service.GenerateOTP(emailId);
                return TempOtp;
            }
            return "Please Enter the correct EmailId or Resend the OTP!";
        }
        [HttpPost]
        [Route("/users/resetPassword")]
        public bool ResetPassword(ResetPassword value)
        {
            if (ModelState.IsValid)
            {
                bool flag = service.ResetPassword(value.EmailId, value.OTP, value.NewPassword);
                return flag;
            }
            return false;
        }
        [HttpGet]
        [Route("/users/forgotPassword/{email}")]
        public bool ForgotPassword(string email)
        {
            User? user = null;
            user = service.GetUserByEmail(email);

            if (user.UserId != 0)
            {
                try
                {
                    using (System.Net.Mail.SmtpClient smtpClient = new System.Net.Mail.SmtpClient("smtp.gmail.com"))
                    {
                        string TempOtp = service.GenerateOTP(email);
                        MailMessage mailMessage = new MailMessage();
                        mailMessage.From = new MailAddress("somuthegreat15@gmail.com");
                        mailMessage.To.Add(email);
                        mailMessage.Subject = "Password Reset";
                        mailMessage.Body = $"Dear User, your OTP for Reset Password is {TempOtp}. Do Not share this one time OTP to anyone!";

                        smtpClient.Port = 587;
                        smtpClient.Credentials = new NetworkCredential("somuthegreat15@gmail.com", "botu pwnv opqu wtbq");//HOST EMAIL LIKE YOURSELF MAILID IS HOST SERVER TO SEND OTP TO OTHER EMAILS AND MAKE AN APP PASSWORD(SECURITY KEY) IN 2 STEP VERIFICATION
                        smtpClient.EnableSsl = true;
                        smtpClient.Send(mailMessage);
                        return true;
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Email sending error: {ex.Message}");
                }
            }
            return false;
        }

    }
}


