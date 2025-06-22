package Code;

public class WordFactory extends DocFactory{
    public Document createDocument(){
        return new WordDocument();
    }
}
