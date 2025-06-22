package Code;

public class ExcelFactory extends DocFactory{
    public Document createDocument(){
        return new ExcelDocument();
    }
}
