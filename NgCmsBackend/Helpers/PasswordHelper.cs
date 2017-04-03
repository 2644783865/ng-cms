using System;
using System.Collections.Generic;
using System.Text;
using System.Security.Cryptography;
using NgCmsBackend.Entities;

namespace NgCmsBackend.Helpers
{
    public static class PasswordHelper
    {
        public static string Hash(string password)
        {
            var bytes = new UTF8Encoding().GetBytes(password);
            byte[] hashBytes;
            using (var algorithm = new HMACSHA256())
            {
                hashBytes = algorithm.ComputeHash(bytes);
            }
            return Convert.ToBase64String(hashBytes);
        }

        public static bool CheckPassword(tblUser user, string password)
        {
            var comparePassword = Hash(password);

            return comparePassword.Equals(user.Password);
        }
    }
}
