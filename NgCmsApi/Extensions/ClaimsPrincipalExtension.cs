using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AspNet.Security.OpenIdConnect.Extensions;
using AspNet.Security.OpenIdConnect.Primitives;

namespace NgCmsApi.Extensions
{
    public static class ClaimsPrincipalExtension
    {
        public static int GetUserId(this ClaimsPrincipal value)
        {
            return Convert.ToInt32(value.GetClaim(OpenIdConnectConstants.Claims.Subject));
        }
    }
}
