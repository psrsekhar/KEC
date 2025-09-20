public class Consecutive {
    public static void main(String[] args) {
        int n = 5;
        int[] arr = { 1, 2, 1, 4, 5 };
        int count = 0;
        for (int i = 1; i < n - 2; i++) {
            if (arr[i - 1] + arr[i + 1] == arr[i]) {
                count++;
            }
        }
        System.out.println(count);
    }
}
