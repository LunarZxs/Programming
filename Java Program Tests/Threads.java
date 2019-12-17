
public class Threads {
	
	public static void main(String[] args) {
		
		Thread t1  = new Thread(new classForThread(10));
		Thread t2  = new Thread(new classForThread(5));
		t1.start();
		t2.start();
		
	}
}
