using Calculator1;
using System.Security.Cryptography.X509Certificates;

class Calculate : Get_values
{
    
     public void Age()
     {
        Console.Write("Current age : ");
        var obj = new Calculate();
        obj.set_age(int.Parse(Console.ReadLine()));    

        if (current_age > 18 && current_age < 65)
        {
            var clc = new Calculate();
            clc.Annual_salary();
        }
        else
        {
            Console.WriteLine("Enter a Valid Age");
            return;
        }
    }

    public void Annual_salary()
    {
        Console.Write("Annual Salary : ");

        var obj1 = new Calculate();
        obj1.set_salary(int.Parse(Console.ReadLine()));

        if (annual_salary > 5000 && annual_salary < 280000)
        {
            var cl = new Calculate();
            cl.Annual_contribution();

        }
        else
        {
            Console.WriteLine("Annual Salary " + annual_salary + " Not Eligible");
            return;
        }
    }

    public void Annual_contribution()
    {
        
        Console.Write("Annual Contribution in % : ");

        var obj2 = new Calculate();
        obj2.set_annual(int.Parse(Console.ReadLine()));

        if (annual_contribution > 0 && annual_contribution <100)
        {
            a = (annual_contribution * annual_salary) / 100;
            Console.WriteLine("Annual Contribution in Dollars : " + a);

            var ec = new Calculate();
            ec.Employer_contribution();
        }

        else
        {
            Console.WriteLine("Error, Enter a Valid Range");
        }
    }

    public void Employer_contribution()
    {
        
        Console.Write("Employer Contribution in % : ");

        var obj3 = new Calculate();
        obj3.set_employer(int.Parse(Console.ReadLine()));

        if (employer_contribution > 0 && employer_contribution < 100)
        {
            b = (employer_contribution * a) / 100;
            Console.WriteLine("Employer Contribution in Dollars : " + b);

            var ml = new Calculate();
            ml.Maximum_limit();
        }
        else
        {
            Console.WriteLine("Error, Enter a Valid Range");
        }           
    }

    public void Maximum_limit()
    {
        Console.Write("Maximum Limit in % : ");

        var obj4 = new Calculate();
        obj4.set_maximum(int.Parse(Console.ReadLine()));

        if (maximum_limit > 0 && maximum_limit < 100)
        {
            employer_match = (annual_salary * maximum_limit) / 100;
            Console.WriteLine("Employer Match : " + employer_match);

            var am = new Calculate();
            am.Amount();
        }
        else
        {
            Console.WriteLine("Error, Enter a Valid Range");
        }
    }

    public void Amount()
    {
        //a = annual_contribution in dollars
        //b = employer_contribution in dollars

        if(b < employer_match)
        {
            amount = a + b;
            Console.WriteLine("Amount Savings : " + amount);
        }
        else
        {
            amount = a + employer_match;
            Console.WriteLine("Amount Savings : " + amount);
        }

        var ann = new Calculate();
        ann.Annual_return();
    }

    public void Annual_return()
    {
        Console.Write("Annual Return in % : ");

        var obj6 = new Calculate();
        obj6.set_annual_return(double.Parse(Console.ReadLine()));

        //c=annual increase in dollars
        c = (annual_salary * annual_return) / 100;
        Console.WriteLine("Annual Return in dollars : " + c);

        var re = new Calculate();
        re.Retirement();

    }

    public void Retirement()
    {
        retirement_period = retirement_age - current_age;
        Console.WriteLine("Retirement Period : " + retirement_period);

        var mt = new Calculate();
        mt.Maturity();
    }

    public void Maturity()
    {
        Console.Write("Initial Balance : ");

        var obj7 = new Calculate();
        obj7.set_initial_balance(int.Parse(Console.ReadLine()));


        x = (initial_balance * Math.Pow((1 + (annual_return / 100)), retirement_period))  ;
     
        y = amount * ((Math.Pow((1 + (annual_return / 100)), retirement_period) - 1) * (1 + (annual_return / 100))) 
            / (annual_return / 100) ;
        
        maturity = x + y;

        Console.WriteLine(maturity);
    }
}