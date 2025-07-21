namespace Hospital_API.DTOs
{
    public class PrescriptionsDTO
    {
        public int Id { get; set; }
        public int PatientID { get; set; }
        public int MedicalRecordID { get; set; }
        public string PrescribedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public List<PrescriptionDetailsDTO> PrescriptionDetails { get; set; }
    }
}
