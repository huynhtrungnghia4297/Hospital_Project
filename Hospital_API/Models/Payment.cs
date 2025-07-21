namespace Hospital_API.Models
{
public class Payment
{
    public int Id { get; set; }
    public int InvoiceId { get; set; }
    public decimal Amount { get; set; }
    public DateTime PaymentDate { get; set; }
    public string PaymentMethod { get; set; } = string.Empty;
    public string? TransactionCode { get; set; }
    public Invoice Invoice { get; set; } = null!;

}
}
