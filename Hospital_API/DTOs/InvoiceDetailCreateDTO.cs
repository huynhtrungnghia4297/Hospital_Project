namespace Hospital_API.DTOs
{
    public class InvoiceDetailCreateDTO
    {
        public int InvoiceId { get; set; }
        public string ItemType { get; set; } = string.Empty; 
        public int ItemId { get; set; }
        public string? Description { get; set; } 
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
    }

}