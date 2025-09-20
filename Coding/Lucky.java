public class Lucky {
    public static void main(String[] args) {
        int number = 1230;
        int sum = String.valueOf(number).chars().map(c -> c - '0').sum();
        if (sum % 3 == 0 || sum % 5 == 0 || sum % 7 == 0) {
            System.out.println(number + " is a lucky number");
        } else {
            System.out.println(number + " is not a lucky number");
        }
    }
}
