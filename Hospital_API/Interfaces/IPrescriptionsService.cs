using Hospital_API.DTOs;

namespace Hospital_API.Interfaces
{
    public interface IPrescriptionsService
    {
        Task<List<PrescriptionsDTO>> GetAll();
        Task<PrescriptionsDTO> GetById(int id);
        Task<PrescriptionsDTO> GetByPatientId(int patientId);
        Task<PrescriptionsDTO> Create(PrescriptionsDTO dto);
        Task<bool> Update(int id, PrescriptionsDTO dto);
        Task<bool> Delete(int id);
    }
}
