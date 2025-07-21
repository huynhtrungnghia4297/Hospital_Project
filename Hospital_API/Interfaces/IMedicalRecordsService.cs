using Hospital_API.DTOs;

namespace Hospital_API.Interfaces
{
    public interface IMedicalRecordService
    {
        Task<List<MedicalRecordsDTO>> GetAll();
        Task<MedicalRecordsDTO> GetById(int id);
        Task<MedicalRecordsDTO> GetByPatientId(int patientId);
        Task<MedicalRecordsDTO> Create(MedicalRecordsDTO dto);
        Task<bool> Update(int id, MedicalRecordsDTO dto);
        Task<bool> Delete(int id);
    }
}
