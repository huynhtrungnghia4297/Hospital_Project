using Microsoft.EntityFrameworkCore;

namespace Hospital_API.Data
{
    public class HospitalDbContext : DbContext
    {
        //contructor
        public HospitalDbContext(DbContextOptions<HospitalDbContext> options) : base(options) { }
        // add các Model entity

    }
}
