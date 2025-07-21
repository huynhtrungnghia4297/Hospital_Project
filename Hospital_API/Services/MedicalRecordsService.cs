using Hospital_API.DTOs;
using Hospital_API.Interfaces;
using Hospital_API.Models;

namespace Hospital_API.Services
{
    public class MedicalRecordService : IMedicalRecordService
    {
        private readonly IMedicalRecordRepository _repository;

        public MedicalRecordService(IMedicalRecordRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<MedicalRecordsDTO>> GetAll()
        {
            var records = await _repository.GetAll();
            return records.Select(MapToDTO).ToList();
        }

        public async Task<MedicalRecordsDTO> GetById(int id)
        {
            var record = await _repository.GetById(id);
            return record == null ? null : MapToDTO(record);
        }

        public async Task<MedicalRecordsDTO> GetByPatientId(int patientId)
        {
            var record = await _repository.GetByPatientId(patientId);
            return record == null ? null : MapToDTO(record);
        }

        public async Task<MedicalRecordsDTO> Create(MedicalRecordsDTO dto)
        {
            var record = new MedicalRecord
            {
                AppointmentID = dto.AppointmentID,
                PatientID = dto.PatientID,
                Diagnosis = dto.Diagnosis,
                Conclusion = dto.Conclusion,
                CreatedAt = dto.CreatedAt
            };
            var created = await _repository.Create(record);
            return MapToDTO(created);
        }

        public async Task<bool> Update(int id, MedicalRecordsDTO dto)
        {
            var record = await _repository.GetById(id);
            if (record == null) return false;

            record.AppointmentID = dto.AppointmentID;
            record.PatientID = dto.PatientID;
            record.Diagnosis = dto.Diagnosis;
            record.Conclusion = dto.Conclusion;
            record.CreatedAt = dto.CreatedAt;

            return await _repository.Update(record);
        }

        public async Task<bool> Delete(int id)
        {
            return await _repository.Delete(id);
        }

        private MedicalRecordsDTO MapToDTO(MedicalRecord r) => new MedicalRecordsDTO
        {
            Id = r.Id,
            AppointmentID = r.AppointmentID,
            PatientID = r.PatientID,
            Diagnosis = r.Diagnosis,
            Conclusion = r.Conclusion,
            CreatedAt = r.CreatedAt
        };
    }
}
