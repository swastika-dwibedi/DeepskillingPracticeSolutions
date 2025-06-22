public class Main {
    public static void main(String[] args) {
        Product[] pr={
            new Product("P01", "Watch", "Accessories"),
            new Product("P02", "Shoes", "Fashion"),
            new Product("P05","Bag","Fashion"),
            new Product("P03", "Phone", "Electronics"),
            new Product("P01", "Laptop", "Electronics")
        };
        String searchName="Bag";

        Product res1=Search.linearSearch(pr, searchName);
        System.out.println("Linear Search: "+(res1!=null? res1:"Not found"));

        Product res2=Search.binarySearch(pr, searchName);
        System.out.println("Binary Search: "+(res2!=null? res2:"Not found"));
        
    }
}
