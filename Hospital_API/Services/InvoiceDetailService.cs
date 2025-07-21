using Hospital_API.DTOs;
using Hospital_API.Interfaces;
using Hospital_API.Models;
using Hospital_API.Data;
using Microsoft.EntityFrameworkCore;
namespace Hospital_API.Services
{
    public class InvoiceDetailService : IInvoiceDetailService
    {
        private readonly IInvoiceDetailRepository _repository;
        private readonly HospitalDbContext _context;
        public InvoiceDetailService(IInvoiceDetailRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<InvoiceDetailDTO>> GetAll()
        {
            var details = await _repository.GetAll();
            return details.Select(MapToDTO).ToList();
        }

        public async Task<InvoiceDetailDTO> GetById(int id)
        {
            var detail = await _repository.GetById(id);
            return detail == null ? null : MapToDTO(detail);
        }

        public async Task<IEnumerable<InvoiceDetailDTO>> GetByInvoiceId(int invoiceId)
        {
            var details = await _repository.GetByInvoiceId(invoiceId);
            return details.Select(MapToDTO).ToList();
        }

        public async Task<InvoiceDetailDTO> Create(InvoiceDetailCreateDTO dto)
        {
            var detail = new InvoiceDetail
            {
                InvoiceId = dto.InvoiceId,
                ItemType = dto.ItemType,
                ItemId = dto.ItemId,
                Description = dto.Description,
                Quantity = dto.Quantity,
                UnitPrice = dto.UnitPrice,
                TotalPrice = dto.Quantity * dto.UnitPrice
            };
            var created = await _repository.Create(detail);
            return MapToDTO(created);
        }

        public async Task<bool> Update(int id, InvoiceDetailCreateDTO dto)
        {
            var detail = await _repository.GetById(id);
            if (detail == null) return false;
            detail.InvoiceId = dto.InvoiceId;
            detail.ItemType = dto.ItemType;
            detail.ItemId = dto.ItemId;
            detail.Description = dto.Description;
            detail.Quantity = dto.Quantity;
            detail.UnitPrice = dto.UnitPrice;
            detail.TotalPrice = dto.Quantity * dto.UnitPrice;
            return await _repository.Update(detail);
        }

        public async Task<bool> Delete(int id) => await _repository.Delete(id);
        private async Task UpdateInvoiceTotal(int invoiceId)
        {
            var invoice = await _context.Invoices
                .Include(i => i.InvoiceDetails)
                .FirstOrDefaultAsync(i => i.Id == invoiceId);
            if (invoice != null)
            {
                invoice.TotalAmount = invoice.InvoiceDetails.Sum(d => d.TotalPrice);
                await _context.SaveChangesAsync();
            }
        }

        private InvoiceDetailDTO MapToDTO(InvoiceDetail d) => new InvoiceDetailDTO
        {
            Id = d.Id,
            ItemType = d.ItemType,
            InvoiceId = d.InvoiceId,
            ItemId = d.ItemId,
            Description = d.Description,
            Quantity = d.Quantity,
            UnitPrice = d.UnitPrice,
            TotalPrice = d.TotalPrice
        };
    }
}
