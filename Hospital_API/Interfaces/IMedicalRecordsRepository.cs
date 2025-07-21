using Hospital_API.Models;

namespace Hospital_API.Interfaces
{
    public interface IMedicalRecordRepository
    {
        Task<List<MedicalRecord>> GetAll();
        Task<MedicalRecord> GetById(int id);
        Task<MedicalRecord> GetByPatientId(int patientId);
        Task<MedicalRecord> Create(MedicalRecord record);
        Task<bool> Update(MedicalRecord record);
        Task<bool> Delete(int id);
    }
}
