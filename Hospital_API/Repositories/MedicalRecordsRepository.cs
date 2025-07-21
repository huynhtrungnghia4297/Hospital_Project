using Hospital_API.Interfaces;
using Hospital_API.Models;
using Microsoft.EntityFrameworkCore;
using Hospital_API.Data;

namespace Hospital_API.Repository
{
    public class MedicalRecordRepository : IMedicalRecordRepository
    {
        private readonly HospitalDbContext _context;

        public MedicalRecordRepository(HospitalDbContext context)
        {
            _context = context;
        }

        public async Task<List<MedicalRecord>> GetAll()
        {
            return await _context.MedicalRecords.ToListAsync();
        }

        public async Task<MedicalRecord> GetById(int id)
        {
            return await _context.MedicalRecords.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<MedicalRecord>> GetByPatientId(int patientId)
        {
            return await _context.MedicalRecords
                .Where(x => x.PatientID == patientId)
                .ToListAsync();
        }

        public async Task<MedicalRecord> Create(MedicalRecord record)
        {
            _context.MedicalRecords.Add(record);
            await _context.SaveChangesAsync();
            return record;
        }

        public async Task<bool> Update(MedicalRecord record)
        {
            _context.MedicalRecords.Update(record);
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> Delete(int id)
        {
            var record = await _context.MedicalRecords.FindAsync(id);
            if (record == null) return false;
            _context.MedicalRecords.Remove(record);
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
