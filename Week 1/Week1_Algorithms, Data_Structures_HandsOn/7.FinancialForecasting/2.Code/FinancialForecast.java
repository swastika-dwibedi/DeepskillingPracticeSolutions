public class FinancialForecast {
    public static double forecast(double principal, double rate, int years){
        if(years==0)
           return principal;
        return (1+rate)* forecast(principal, rate, years-1);
    }

    public static void main(String[] args) {
        double principal=200000;
        double rate=.1;
        int years=3;

        double predictedValue=forecast(principal,rate,years);
        System.out.printf("Predicted value after %d years: Rs.%.2f%n", years,predictedValue);
    }
}
