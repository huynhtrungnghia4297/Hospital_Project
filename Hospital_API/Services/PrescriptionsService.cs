using Hospital_API.DTOs;
using Hospital_API.Interfaces;
using Hospital_API.Models;

namespace Hospital_API.Services
{
    public class PrescriptionsService : IPrescriptionsService
    {
        private readonly IPrescriptionsRepository _repository;

        public PrescriptionsService(IPrescriptionsRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<PrescriptionsDTO>> GetAll()
        {
            var prescriptions = await _repository.GetAll();
            return prescriptions.Select(MapToDTO).ToList();
        }

        public async Task<PrescriptionsDTO> GetById(int id)
        {
            var prescriptions = await _repository.GetById(id);
            return prescriptions == null ? null : MapToDTO(prescriptions);
        }

        public async Task<PrescriptionsDTO> GetByPatientId(int patientId)
        {
            var prescriptions = await _repository.GetByPatientId(patientId);
            return prescriptions == null ? null : MapToDTO(prescriptions);
        }

        public async Task<PrescriptionsDTO> Create(PrescriptionsDTO dto)
        {
            var prescriptions = new Prescriptions
            {
                PatientID = dto.PatientID,
                MedicalRecordID = dto.MedicalRecordID,
                PrescribedBy = dto.PrescribedBy,
                CreatedAt = dto.CreatedAt,
                PrescriptionDetails = dto.PrescriptionDetails.Select(pd => new PrescriptionDetails
                {
                    MedicineID = pd.MedicineID,
                    Dosage = pd.Dosage,
                    Quantity = pd.Quantity,
                    Instructions = pd.Instructions
                }).ToList()
            };
            var created = await _repository.Create(prescriptions);
            return MapToDTO(created);
        }

        public async Task<bool> Update(int id, PrescriptionsDTO dto)
        {
            var existing = await _repository.GetById(id);
            if (existing == null) return false;

            existing.PatientID = dto.PatientID;
            existing.MedicalRecordID = dto.MedicalRecordID;
            existing.PrescribedBy = dto.PrescribedBy;
            existing.CreatedAt = dto.CreatedAt;
            existing.PrescriptionDetails = dto.PrescriptionDetails.Select(pd => new PrescriptionDetails
            {
                MedicineID = pd.MedicineID,
                Dosage = pd.Dosage,
                Quantity = pd.Quantity,
                Instructions = pd.Instructions
            }).ToList();

            return await _repository.Update(existing);
        }

        public async Task<bool> Delete(int id) => await _repository.Delete(id);

        private PrescriptionsDTO MapToDTO(Prescriptions p) => new PrescriptionsDTO
        {
            Id = p.Id,
            PatientID = p.PatientID,
            MedicalRecordID = p.MedicalRecordID,
            PrescribedBy = p.PrescribedBy,
            CreatedAt = p.CreatedAt,
            PrescriptionDetails = p.PrescriptionDetails.Select(pd => new PrescriptionDetailsDTO
            {
                Id = pd.Id,
                MedicineID = pd.MedicineID,
                Dosage = pd.Dosage,
                Quantity = pd.Quantity,
                Instructions = pd.Instructions
            }).ToList()
        };
    }
}
