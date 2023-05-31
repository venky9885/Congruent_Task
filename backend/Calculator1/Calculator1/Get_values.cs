using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator1
{
    class Get_values
    {
        protected static int current_age;
        protected static int annual_salary;
        protected static int annual_contribution, a = 0;
        protected static int employer_contribution, b = 0;
        protected static int maximum_limit, employer_match = 0;
        protected static int amount;
        protected static int retirement_period, retirement_age = 65;
        protected static double annual_return;
        protected static double maturity;
        protected static int initial_balance;
        protected static double c = 0,x=0,y=0;
        public void set_age(int age)
        {
            current_age = age;
        }
        public int get_values()
        {
            return current_age;
        }

        public void set_salary(int salary)
        {
            annual_salary = salary;
        }
        public int get_salary()
        {
            return annual_salary;
        }

        public void set_annual(int ac)
        {
            annual_contribution = ac;
        }
        public int get_annual()
        {
            return annual_contribution;
        }

        public void set_employer(int ec)
        {
            employer_contribution = ec;
        }
        public int get_employer()
        {
            return employer_contribution;
        }

        public void set_maximum(int max)
        {
            maximum_limit = max;
        }
        public int get_maximum()
        {
            return maximum_limit;
        }

        public void set_annual_return(double ai)
        {
            annual_return = ai;
        }
        public double get_annual_return()
        {
            return annual_return;
        }

        public void set_initial_balance(int ib)
        {
            initial_balance = ib;
        }
        public double get_initial_balance()
        {
            return initial_balance;
        }
    }
}