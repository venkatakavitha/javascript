public class StarSquare {
    public static void main(String[] args) {
        // Loop through 5 rows
        for (int i = 1; i <= 5; i++) {
            // Loop through 5 columns
            for (int j = 1; j <= 5; j++) {
                System.out.print("*"); // Print a star without a newline
            }
            System.out.println(); // Move to the next line after each row
        }
    }
}