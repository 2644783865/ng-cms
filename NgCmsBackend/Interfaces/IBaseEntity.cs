using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NgCmsBackend.Interfaces
{
    interface IBaseEntity
    {
        DateTime Created { get; set; }
        DateTime Modified { get; set; }
    }
}
