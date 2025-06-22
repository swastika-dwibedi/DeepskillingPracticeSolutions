package Code;

public class Main {
    public static void main(String args[]){
        DocFactory wordFactory=new WordFactory();
        Document wordDoc=wordFactory.createDocument();
        wordDoc.open();

        DocFactory pdfFactory=new PdfFactory();
        Document pdfDoc=pdfFactory.createDocument();
        pdfDoc.open();

        DocFactory excelFactory=new ExcelFactory();
        Document excelDoc=excelFactory.createDocument();
        excelDoc.open();
    }
}
