using Hospital_API.DTOs;

namespace Hospital_API.Interfaces
{
    public interface IInvoiceService
    {
        Task<IEnumerable<InvoiceDTO>> GetAll();
        Task<InvoiceDTO> GetById(int id);
        Task<InvoiceDTO> GetByPatientId(int patientId);
        Task<InvoiceDTO> GetByAppointmentId(int appointmentId);
        Task<InvoiceDTO> Create(InvoiceCreateDTO dto);
        Task<bool> Update(int id, InvoiceCreateDTO dto);
        Task<bool> Delete(int id);
    }
}