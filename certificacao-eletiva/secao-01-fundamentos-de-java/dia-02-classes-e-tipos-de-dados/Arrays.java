public class Arrays {
    public static void main(String[] args) {
        int[] arrayOfInteger = new int[10];
        int[] arrayOfInteger2 = {1,2,3,4,5,6,767,878,8,8,9,9,9};
        int[][] matrix = new int[2][10];
        String[] arrayOfString = new String[10];

        matrix[0][0] = 10;
        matrix[1][0] = 20;

        arrayOfString[0] = "In Trybe";
        arrayOfString[1] = " I'm learning Java!";

        arrayOfInteger[0] = 40;
        arrayOfInteger[1] = 55;
        arrayOfInteger[2] = 63;
        arrayOfInteger[3] = 17;
        arrayOfInteger[4] = 22;
        arrayOfInteger[5] = 68;
        arrayOfInteger[6] = 89;
        arrayOfInteger[7] = 97;
        arrayOfInteger[8] = 89;

        System.out.println(arrayOfInteger[8]);
        System.out.println(arrayOfInteger[2]);

        arrayOfInteger[9] = 89;
        System.out.println(arrayOfInteger[9]);

        System.out.println(arrayOfInteger2[3]); // 4
        System.out.println(matrix[0][0]); // 10
        System.out.println(matrix[1][5]); // 0
        System.out.println(arrayOfString[0] + arrayOfString[1]); // In Trybe I'm learning Java!
        System.out.println(arrayOfString.length); // 10
    }
}
