import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class Permutation {
    public static void main(String[] args) {
        int[] series = { 1, 1, 3, 4, 4 };
        int result = minimumCount(series);
        System.out.println(result);
    }

    private static int minimumSteps(int[] series) {
        // C# -> int n = series.Length;
        int n = series.length;
        // counting occurances
        int[] occurances = new int[n + 1];
        for (int number : series) {
            occurances[number]++;
        }
        // finding missed elements
        List<Integer> missedNumbers = new LinkedList<Integer>();
        for (int i = 1; i < occurances.length; i++) {
            if (occurances[i] == 0) {
                missedNumbers.add(occurances[i]);
            }
        }
        // find repeated elements
        Queue<Integer> repeatedNumbers = new LinkedList<Integer>();
        for (int i = 1; i <= n; i++) {
            while (occurances[i] > 1) {
                repeatedNumbers.offer(i);
                occurances[i]--;
            }
        }
        // count minimum steps required
        int minimumSteps = 0;
        for (int missingumber : missedNumbers) {
            minimumSteps += (missingumber - repeatedNumbers.poll());
        }
        return minimumSteps;
    }

    private static int minimumCount(int[] series) {
        int count = 0;
        int[] arr = new int[series.length + 1];
        for (int i = 0; i < series.length; i++) {
            arr[i + 1] = series[i];
        }
        // System.arraycopy(series, 0, arr, 1, series.length);
        for (int i = 1; i <= series.length; i++) {
            if (arr[i] == i) {
                continue;
            } else {
                count += Math.abs(arr[i] - i);
            }
        }
        return count;
    }
}