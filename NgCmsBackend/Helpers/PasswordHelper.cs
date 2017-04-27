using System;
using System.Collections.Generic;
using System.Text;
using System.Security.Cryptography;
using NgCmsBackend.Entities;

namespace NgCmsBackend.Helpers
{
    public static class PasswordHelper
    {
        public static byte[] Hash(string password, string salt)
        {
            byte[] unhashedBytes = Encoding.Unicode.GetBytes(String.Concat(salt, password));

            using (var sha256 = SHA256.Create())
            {
                byte[] hashedBytes = sha256.ComputeHash(unhashedBytes);
                return hashedBytes;
            }
        }

        public static bool CompareHash(string attemptedPassword, string password, string salt)
        {
            var savedHash = Convert.FromBase64String(password);

            string base64Hash = Convert.ToBase64String(savedHash);
            var attempthash = Hash(attemptedPassword, salt);
            string base64AttemptedHash = Convert.ToBase64String(attempthash);

            return base64Hash == base64AttemptedHash;
        }     
    }
}
