class AnimalExample {
    void makeSound() {
        System.out.println("Some generic animal sound");
    }
}
class DogExample extends AnimalExample {
    @Override
    void makeSound() {
        System.out.println("Bark");
    }
}

public class Inheritance{
    public static void main(String[] args) {
        AnimalExample genericAnimal = new AnimalExample();
        genericAnimal.makeSound();  
        DogExample dog = new DogExample();
        dog.makeSound();       
    }
}
