using Hospital_API.Data;
using Hospital_API.Interfaces;
using Hospital_API.Models;
using Microsoft.EntityFrameworkCore;

namespace Hospital_API.Repositories
{
    public class InvoiceRepository : IInvoiceRepository
    {
        private readonly HospitalDbContext _context;
        public InvoiceRepository(HospitalDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Invoice>> GetAll() =>
            await _context.Invoices.Include(x => x.InvoiceDetails).Include(x => x.Payments).ToListAsync();

        public async Task<Invoice> GetById(int id) =>
            await _context.Invoices.Include(x => x.InvoiceDetails).Include(x => x.Payments).FirstOrDefaultAsync(x => x.Id == id);

        public async Task<Invoice> GetByPatientId(int patientId) =>
    await _context.Invoices
        .Include(x => x.InvoiceDetails)
        .Include(x => x.Payments)
        .FirstOrDefaultAsync(x => x.PatientId == patientId);

        public async Task<Invoice> GetByAppointmentId(int appointmentId) =>
            await _context.Invoices
                .Include(x => x.InvoiceDetails)
                .Include(x => x.Payments)
                .FirstOrDefaultAsync(x => x.AppointmentId == appointmentId); public async Task<Invoice> Create(Invoice invoice)
        {
            _context.Invoices.Add(invoice);
            await _context.SaveChangesAsync();
            return invoice;
        }

        public async Task<bool> Update(Invoice invoice)
        {
            _context.Invoices.Update(invoice);
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> Delete(int id)
        {
            var invoice = await _context.Invoices.FindAsync(id);
            if (invoice == null) return false;
            _context.Invoices.Remove(invoice);
            return await _context.SaveChangesAsync() > 0;
        }
    }
}