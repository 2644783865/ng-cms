using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NgCmsBackend.DbContexts
{
    public class BaseDbContext : BaseEntities
    {
        public static BaseDbContext Create()
        {
            return new BaseDbContext();
        }
    }
}
