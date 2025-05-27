interface PlayableExample {
    void play();
}
class GuitarExample implements PlayableExample {
    public void play() {
        System.out.println("Playing the guitar");
    }
}
class PianoExample implements PlayableExample {
    public void play() {
        System.out.println("Playing the piano");
    }
}
public class InterfaceImplementation{
    public static void main(String[] args) {
        GuitarExample guitar = new GuitarExample();
        PianoExample piano = new PianoExample();
        guitar.play();  
        piano.play();  
    }
}
