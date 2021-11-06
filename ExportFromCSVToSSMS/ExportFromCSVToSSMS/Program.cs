using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess;

namespace ExportFromCSVToSSMS
{
    class Program
    {
        static void Main(string[] args)
        {

            var dt = DataTable.New.ReadLazy(@"..\..\username.csv");
            List<Account> accounts = new List<Account>();
   

            for (int e = 0; e < dt.Rows.Count();e++)
            {
                Account account = new Account();

                account.UserName = dt.Rows.ElementAt(e).Values[0];
                account.FirstName = dt.Rows.ElementAt(e).Values[2];
                account.LastName = dt.Rows.ElementAt(e).Values[3];

                accounts.Add(account);

            }

            foreach(var acc in accounts)
            {
                ConnectToDatabase.InsertIntoDatabase(acc.UserName, acc.FirstName, acc.LastName);
            }

            Console.WriteLine("Totul s-a important cu succes in baza de date!");
        }
    }
}
