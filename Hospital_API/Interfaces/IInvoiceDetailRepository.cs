using Hospital_API.Models;

namespace Hospital_API.Interfaces
{
    public interface IInvoiceDetailRepository
    {
        Task<IEnumerable<InvoiceDetail>> GetAll();
        Task<InvoiceDetail> GetById(int id);
        Task<IEnumerable<InvoiceDetail>> GetByInvoiceId(int invoiceId);
        Task<InvoiceDetail> Create(InvoiceDetail detail);
        Task<bool> Update(InvoiceDetail detail);
        Task<bool> Delete(int id);
    }
}