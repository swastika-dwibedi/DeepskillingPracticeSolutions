package Code;

public class PdfFactory extends DocFactory{
    public Document createDocument()
    {
        return new PdfDocument();
    }
}
