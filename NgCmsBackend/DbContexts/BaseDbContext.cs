using NgCmsBackend;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NgCmsBackend.DbContexts
{
    public class BaseDbContext : NgCmsEntities
    {
        public static BaseDbContext Create()
        {
            return new BaseDbContext();
        }
    }
}
