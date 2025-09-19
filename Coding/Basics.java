public class Basics {
    public static void main(String[] args) {
        Student newStudent = new Student(20, "Trisha", "abc@def.com");
        System.out.print(newStudent);
    }
}

// Encapsulated Model class
// C# -> class Student: Department {
class Student {
    // Data Hiding
    private Integer id;
    private String name;
    private String email;

    // private constructor
    private Student() {
    }

    // parametrized constructor
    public Student(Integer id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // copy constructor
    public Student(Student newStudent) {
        this.id = newStudent.id;
        this.name = newStudent.name;
        this.email = newStudent.email;
    }

    // C# -> public Integer id {get; set;}
    // public string name {get; set;}
    // public string email {get; set;}

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return this.id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return this.email;
    }

    @Override
    public String toString() {
        return this.id + "," + this.name + "," + this.email;
    }
}