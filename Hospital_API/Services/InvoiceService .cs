using Hospital_API.DTOs;
using Hospital_API.Interfaces;
using Hospital_API.Models;

namespace Hospital_API.Services
{
    public class InvoiceService : IInvoiceService
    {
        private readonly IInvoiceRepository _repository;
        public InvoiceService(IInvoiceRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<InvoiceDTO>> GetAll()
        {
            var invoices = await _repository.GetAll();
            return invoices.Select(MapToDTO).ToList();
        }

        public async Task<InvoiceDTO> GetById(int id)
        {
            var invoice = await _repository.GetById(id);
            return invoice == null ? null : MapToDTO(invoice);
        }

        public async Task<IEnumerable<InvoiceDTO>> GetByPatientId(int patientId)
        {
            var invoices = await _repository.GetByPatientId(patientId);
            return invoices.Select(MapToDTO).ToList();
        }

        public async Task<IEnumerable<InvoiceDTO>> GetByAppointmentId(int appointmentId)
        {
            var invoices = await _repository.GetByAppointmentId(appointmentId);
            return invoices.Select(MapToDTO).ToList();
        }

        public async Task<InvoiceDTO> Create(InvoiceCreateDTO dto)
        {
            var invoice = new Invoice
            {
                AppointmentId = dto.AppointmentId,
                PatientId = dto.PatientId,
                IssuedDate = DateTime.Now,
                TotalAmount = dto.TotalAmount,
                Status = dto.Status,
                Note = dto.Note,
                CreatedAt = DateTime.Now
            };
            var created = await _repository.Create(invoice);
            return MapToDTO(created);
        }

        public async Task<bool> Update(int id, InvoiceCreateDTO dto)
        {
            var invoice = await _repository.GetById(id);
            if (invoice == null) return false;

            invoice.AppointmentId = dto.AppointmentId;
            invoice.PatientId = dto.PatientId;
            invoice.TotalAmount = dto.TotalAmount;
            invoice.Status = dto.Status;
            invoice.Note = dto.Note;
            return await _repository.Update(invoice);
        }

        public async Task<bool> Delete(int id) => await _repository.Delete(id);

        private InvoiceDTO MapToDTO(Invoice i) => new InvoiceDTO
        {
            Id = i.Id,
            AppointmentId = i.AppointmentId,
            PatientId = i.PatientId,
            IssuedDate = i.IssuedDate,
            TotalAmount = i.TotalAmount,
            Status = i.Status,
            Note = i.Note,
            CreatedAt = i.CreatedAt,
            InvoiceDetails = i.InvoiceDetails.Select(d => new InvoiceDetailDTO
            {
                Id = d.Id,
                ItemType = d.ItemType,
                ItemId = d.ItemId,
                Description = d.Description,
                Quantity = d.Quantity,
                UnitPrice = d.UnitPrice,
                TotalPrice = d.TotalPrice
            }).ToList(),
            Payments = i.Payments.Select(p => new PaymentDTO
            {
                Id = p.Id,
                InvoiceId = p.InvoiceId,
                Amount = p.Amount,
                PaymentDate = p.PaymentDate,
                PaymentMethod = p.PaymentMethod,
                TransactionCode = p.TransactionCode
            }).ToList()
        };
    }
}