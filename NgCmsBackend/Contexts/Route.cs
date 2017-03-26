using System;
using System.Collections.Generic;

namespace NgCmsBackend.Contexts
{
    public partial class Route
    {
        public int RouteId { get; set; }
        public DateTime Created { get; set; }
        public Guid Guid { get; set; }
        public DateTime Modified { get; set; }
        public int? ParentRouteId { get; set; }
        public string Path { get; set; }

        public virtual Route ParentRoute { get; set; }
        public virtual ICollection<Route> InverseParentRoute { get; set; }
    }
}
