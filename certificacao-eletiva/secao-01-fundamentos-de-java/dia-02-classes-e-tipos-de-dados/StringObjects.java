public class StringObjects {
    public static void main(String[] args) {
//        String Phrase = "I'm learning Java";
//        String numbers = "09890";
//        String character = "a";

        StringBuilder stringBuilder = new StringBuilder();

        String I = "I";
        String am = " am";
        String learning = " learning";
        String how = " how";
        String to = " to";
        String use = " use";
        String stringB = " StringBuilder";
        String in = " in";
        String java = " java!";

        String phrase = stringBuilder.append(I)
                .append(am)
                .append(learning)
                .append(how)
                .append(to)
                .append(use)
                .append(stringB)
                .append(in)
                .append(java)
                .toString();

        System.out.println(phrase);
        StringBuilder newPhrase = stringBuilder.replace(24, 38, " non primitive types");
        System.out.println(newPhrase);
    }
}
