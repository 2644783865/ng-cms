using System;
using System.Collections.Generic;
using System.Text;

namespace NgCmsBackend.Interfaces
{
    interface IEntity
    {
        DateTime Created { get; set; }
        DateTime Modified { get; set; }
    }
}
