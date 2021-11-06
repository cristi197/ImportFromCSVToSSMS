using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace ExportFromCSVToSSMS
{
    class ConnectToDatabase
    {

        static public void InsertIntoDatabase(string UserName, string FirstName, string LastName)
        {

            try
            {
                SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultDatabase"].ToString());
                SqlCommand cmd = new SqlCommand("InsertIntoAccounts", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@UserName", UserName);
                cmd.Parameters.AddWithValue("@FirstName", FirstName);
                cmd.Parameters.AddWithValue("@LastName", LastName);
                con.Open();
                cmd.ExecuteNonQuery();

                con.Close();
            }
            catch(Exception ex)
            {
                Console.WriteLine("Something was wrong! \nMessage:{0}",ex.Message);
            }
        }

    }
}
