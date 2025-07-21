using Hospital_API.Models;

namespace Hospital_API.Interfaces
{
    public interface IPrescriptionsRepository
    {
        Task<List<Prescriptions>> GetAll();
        Task<Prescriptions> GetById(int id);
        Task<Prescriptions> GetByPatientId(int patientId);
        Task<Prescriptions> Create(Prescriptions prescriptions);
        Task<bool> Update(Prescriptions prescriptions);
        Task<bool> Delete(int id);
    }
}
