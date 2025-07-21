using Hospital_API.Data;
using Hospital_API.Interfaces;
using Hospital_API.Models;
using Microsoft.EntityFrameworkCore;

namespace Hospital_API.Repositories
{
    public class InvoiceDetailRepository : IInvoiceDetailRepository
    {
        private readonly HospitalDbContext _context;
        public InvoiceDetailRepository(HospitalDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<InvoiceDetail>> GetAll() =>
            await _context.InvoiceDetails.ToListAsync();

        public async Task<InvoiceDetail> GetById(int id) =>
            await _context.InvoiceDetails.FirstOrDefaultAsync(x => x.Id == id);

        public async Task<IEnumerable<InvoiceDetail>> GetByInvoiceId(int invoiceId) =>
            await _context.InvoiceDetails.Where(x => x.InvoiceId == invoiceId).ToListAsync();

        public async Task<InvoiceDetail> Create(InvoiceDetail detail)
        {
            _context.InvoiceDetails.Add(detail);
            await _context.SaveChangesAsync();
            return detail;
        }

        public async Task<bool> Update(InvoiceDetail detail)
        {
            _context.InvoiceDetails.Update(detail);
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> Delete(int id)
        {
            var detail = await _context.InvoiceDetails.FindAsync(id);
            if (detail == null) return false;
            _context.InvoiceDetails.Remove(detail);
            return await _context.SaveChangesAsync() > 0;
        }
    }
}