using Hospital_API.DTOs;

namespace Hospital_API.Services.Interfaces
{
    public interface IAppointmentService
    {
        Task<IEnumerable<AppointmentDTO>> GetAllAsync();
        Task<AppointmentDTO?> GetByIdAsync(int id);
        Task<List<AppointmentDTO>> GetAppointmentsByPatientIdAsync(int patientId);
        Task<AppointmentDTO> CreateAsync(AppointmentCreateDTO dto, int userId);
        Task<bool> CancelAsync(int id);
        Task<bool> ConfirmAsync(int id);
        Task<bool> CompleteAsync(int id);
        Task<IEnumerable<AppointmentDTO>> GetByDoctorAndDateAsync(int doctorId, DateTime date);
        Task<IEnumerable<TimeSpan>> GetAvailableTimeSlotsAsync(int doctorId, DateTime date);
        Task<(bool isCompleted, string message)> CheckAndUpdatePaymentStatusAsync(int id);
    }
}