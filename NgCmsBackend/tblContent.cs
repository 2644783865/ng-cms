//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace NgCmsBackend
{
    using System;
    using System.Collections.Generic;
    
    public partial class tblContent
    {
        public int ContentId { get; set; }
        public string Name { get; set; }
        public string Content { get; set; }
        public System.Guid Guid { get; set; }
        public System.DateTime Created { get; set; }
        public System.DateTime Modified { get; set; }
        public int RouteId { get; set; }
    
        public virtual tblRoute tblRoute { get; set; }
    }
}
