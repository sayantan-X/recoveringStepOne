class memu
{
    public void Inpurt(double h,double l,double b)
    {
        double area=1/2*b*h;
        double peri=b+l+h;
        System.out.println("The Area Is "+area);
        System.out.println("The Perimeter Is "+peri)
    }
    public void Display(double p,double r,double t)
    {
       double Simple Interest =(p*r*t)/100;
       System.out.println("The Simple Interest Is "+simple interest);
    }
    public void Calculate(double r)
    {
        double pi =3.14;
        double area =2*pi*r;
        double circum=2*r*r;
        System.out.println("The Area Is "+area)
        System.out.println("The Circumferencw Is"+circum)
    }
    public void Rec(int l,int b)
    {
        int area=l*b;
        int perim=2*(l+b);
        System.out.println("The Area Is "+area);
        System.out.println("The Perimeyter Is "+perim);
    }
    public static void main ()
    {
        Scanner sc=new Scanner (System.in);
        memu ob=new memu();
        for(int i=1;i<=9;i++)
        System.out.println("Press 1. for Calculatin Area And Perimeter Of A Rectangle")
        System.out.println()
    }
}