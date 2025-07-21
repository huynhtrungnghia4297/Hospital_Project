using Hospital_API.Models;

namespace Hospital_API.Interfaces
{
    public interface IInvoiceRepository
    {
        Task<IEnumerable<Invoice>> GetAll();
        Task<Invoice> GetById(int id);
        Task<Invoice> GetByPatientId(int patientId);
        Task<Invoice> GetByAppointmentId(int appointmentId);
        Task<Invoice> Create(Invoice invoice);
        Task<bool> Update(Invoice invoice);
        Task<bool> Delete(int id);
    }
}