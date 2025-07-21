using Hospital_API.DTOs;
using Hospital_API.Interfaces;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class PrescriptionsController : ControllerBase
{
    private readonly IPrescriptionsService _service;

    public PrescriptionsController(IPrescriptionsService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<ActionResult<List<PrescriptionsDTO>>> GetAll() =>
        Ok(await _service.GetAll());

    [HttpGet("{id}")]
    public async Task<ActionResult<PrescriptionsDTO>> GetById(int id)
    {
        var records = await _service.GetById(id);
        return records == null ? NotFound() : Ok(records);
    }

    [HttpGet("by-patient/{patientId}")]
    public async Task<ActionResult<List<PrescriptionsDTO>>> GetByPatientId(int patientId)
    {
        var records = await _service.GetByPatientId(patientId);
        return !records.Any() ? NotFound() : Ok(records);
    }

    [HttpPost]
    public async Task<ActionResult<PrescriptionsDTO>> Create(PrescriptionsDTO dto)
    {
        var created = await _service.Create(dto);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, PrescriptionsDTO dto)
    {
        var success = await _service.Update(id, dto);
        return success ? NoContent() : NotFound();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var success = await _service.Delete(id);
        return success ? NoContent() : NotFound();
    }
}
