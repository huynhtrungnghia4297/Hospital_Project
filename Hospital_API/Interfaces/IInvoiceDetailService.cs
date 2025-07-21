using Hospital_API.DTOs;

namespace Hospital_API.Interfaces
{
    public interface IInvoiceDetailService
    {
        Task<IEnumerable<InvoiceDetailDTO>> GetAll();
        Task<InvoiceDetailDTO> GetById(int id);
        Task<IEnumerable<InvoiceDetailDTO>> GetByInvoiceId(int invoiceId);
        Task<InvoiceDetailDTO> Create(InvoiceDetailCreateDTO dto);
        Task<bool> Update(int id, InvoiceDetailCreateDTO dto);
        Task<bool> Delete(int id);
    }
}