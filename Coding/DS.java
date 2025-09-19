
public class DS {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("Samantha");
        sb.reverse();

        String name = "Samantha";
        String firstName = "Samantha";
        String lastName = new String("Samantha");
        if (name.equals(firstName)) {
            System.out.println("equal");
        } else {
            System.out.println("Not equal");
        }

    }
}
