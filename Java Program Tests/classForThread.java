
public class classForThread implements Runnable{

	int i;
	int name;
	
	public classForThread(int i) {
		this.i = i;
		
		if(i == 10)
			name = 1;
		if(i == 5)
			name = 2;
	}
	
	@Override
	public void run() {
		while(i > 0) {
			System.out.println(name + ". " + minusFiguresToZero());
			
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
	public synchronized int minusFiguresToZero()
	{
		return i -= 1;
	}

}
