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
            var unhashedBytes = Encoding.Unicode.GetBytes(String.Concat(salt, password));

            using (var sha256 = SHA256.Create())
            {
                var hashedBytes = sha256.ComputeHash(unhashedBytes);
                return hashedBytes;
            }
        }

        public static bool CompareHash(string attemptedPassword, string password, string salt)
        {
            var storedHash = Convert.FromBase64String(password);

            var base64Hash = Convert.ToBase64String(storedHash);
            var attempthash = Hash(attemptedPassword, salt);
            var base64AttemptedHash = Convert.ToBase64String(attempthash);

            return base64Hash == base64AttemptedHash;
        }

        public static string GetSalt()
        {
            var bytes = new byte[128 / 8];
            using (var keyGenerator = RandomNumberGenerator.Create())
            {
                keyGenerator.GetBytes(bytes);
                return BitConverter.ToString(bytes).Replace("-", "").ToLower();
            }
        }
    }
}
