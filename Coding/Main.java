interface UPIImpl {
    public void checkBalance();

    public void transferFunds();
}

abstract class UPIAbstract {
    public abstract void checkBalance();

    public abstract void transferFunds();
}

// Service Class
final class UPIService extends UPIAbstract {
    // method hiding or partial abstraction
    private void checkPIN() {
        System.out.println("Checking the PIN...");
    }

    @Override
    public void checkBalance() {
        checkPIN();
        System.out.println("Checking the balance...");
    }

    public void transferFunds() {
        checkPIN();
        System.out.println("Transfering the funds...");
    }
}

public class Main {
    public static void main(String[] args) {
        // parent reference child object -> Abstraction
        UPIImpl upi = new UPIService();
        upi.checkBalance();
        upi.transferFunds();
    }
}
