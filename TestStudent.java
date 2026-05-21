import java.util.Scanner;
public class TestStudent{
    public static void main(String[] args){
        int clas=0;
        System.out.println("enter class");
        Scanner sc=new Scanner(System.in);
        clas=sc.nextInt();
        String student1="John Doe";
        System.out.println("Student: " + student1);
        System.out.println("Class: " + clas);
    }
}