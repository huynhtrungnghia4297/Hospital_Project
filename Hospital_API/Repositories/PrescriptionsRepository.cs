using Hospital_API.Interfaces;
using Hospital_API.Models;
using Microsoft.EntityFrameworkCore;
using Hospital_API.Data;

namespace Hospital_API.Repositories
{
    public class PrescriptionsRepository : IPrescriptionsRepository
    {
        private readonly HospitalDbContext _context;

        public PrescriptionsRepository(HospitalDbContext context)
        {
            _context = context;
        }

        public async Task<List<Prescriptions>> GetAll()
        {
            return await _context.Prescriptions.Include(p => p.PrescriptionDetails).ToListAsync();
        }

        public async Task<Prescriptions> GetById(int id)
        {
            return await _context.Prescriptions.Include(p => p.PrescriptionDetails)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<Prescriptions> GetByPatientId(int patientId)
        {
            return await _context.Prescriptions
                .Include(p => p.PrescriptionDetails)
                .FirstOrDefaultAsync(p => p.PatientID == patientId);
        }

        public async Task<Prescriptions> Create(Prescriptions prescriptions)
        {
            _context.Prescriptions.Add(prescriptions);
            await _context.SaveChangesAsync();
            return prescriptions;
        }

        public async Task<bool> Update(Prescriptions prescriptions)
        {
            _context.Prescriptions.Update(prescriptions);
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> Delete(int id)
        {
            var prescriptions = await _context.Prescriptions.FindAsync(id);
            if (prescriptions == null) return false;
            _context.Prescriptions.Remove(prescriptions);
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
