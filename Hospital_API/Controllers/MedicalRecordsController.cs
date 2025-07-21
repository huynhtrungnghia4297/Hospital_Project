using Hospital_API.DTOs;
using Hospital_API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Hospital_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicalRecordsController : ControllerBase
    {
        private readonly IMedicalRecordService _service;

        public MedicalRecordsController(IMedicalRecordService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<List<MedicalRecordsDTO>>> GetAll()
        {
            var records = await _service.GetAll();
            return Ok(records);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MedicalRecordsDTO>> GetById(int id)
        {
            var records = await _service.GetById(id);
            return records == null ? NotFound() : Ok(records);
        }

        [HttpGet("by-patient/{patientId}")]
        public async Task<ActionResult<MedicalRecordsDTO>> GetByPatientId(int patientId)
        {
            var record = await _service.GetByPatientId(patientId);
            return record == null ? NotFound() : Ok(record);
        }

        [HttpPost]
        public async Task<ActionResult<MedicalRecordsDTO>> Create(MedicalRecordsDTO records)
        {
            var createdRecords = await _service.Create(records);
            return CreatedAtAction(nameof(GetById), new { id = createdRecords.Id }, createdRecords);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, MedicalRecordsDTO records)
        {
            var success = await _service.Update(id, records);
            return success ? NoContent() : NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var success = await _service.Delete(id);
            return success ? NoContent() : NotFound();
        }
    }
}
