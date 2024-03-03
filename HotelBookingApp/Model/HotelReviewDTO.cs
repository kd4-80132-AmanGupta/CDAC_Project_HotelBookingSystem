using EntityModelsLib;

namespace WebAppFinalProject.Models
{
    public class HotelReviewDTO
    {
        public Decimal HotelRating { get; set; }

        public String HotelComment { get; set; }

        public int HotelId { get; set; }

        public int UserId { get; set; }

        public static implicit operator HotelReview(HotelReviewDTO hotelReviewDTO)
        {
            HotelReview hotelReview = new HotelReview();
            hotelReview.HotelRating = hotelReviewDTO.HotelRating;
            hotelReview.HotelComment = hotelReviewDTO.HotelComment;
            hotelReview.HotelId = hotelReviewDTO.HotelId;
            hotelReview.UserId = hotelReviewDTO.UserId;
            return hotelReview;
        }
    }
}