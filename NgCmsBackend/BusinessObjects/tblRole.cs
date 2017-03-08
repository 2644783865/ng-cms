using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using NgCmsBackend.Interfaces;

namespace NgCmsBackend
{
    public partial class tblRole : IBaseEntity
    {
        public int Id => RoleId;

        // Any custom mappings here
    }
}
