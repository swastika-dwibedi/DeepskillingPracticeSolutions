import java.util.Arrays;
import java.util.Comparator;

public class Search {
    public static Product linearSearch(Product[] pr,String name){
        for(Product p:pr){
            if(p.productName.equalsIgnoreCase(name))
                return p;
        }
        return null;
    }
    public static Product binarySearch(Product[] pr,String name){
        Arrays.sort(pr, Comparator.comparing(p1 -> p1.productName.toLowerCase()));

        int low=0, high=pr.length-1;
        while(low<=high){
            int mid=(low+high)/2;
            int cmp=name.compareToIgnoreCase(pr[mid].productName);
            if(cmp==0)
               return pr[mid];
            else if(cmp<0)
                high=mid-1;
            else 
                low=mid+1;
        }
        return null;
    }
}
