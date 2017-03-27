using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using NgCmsBackend.Interfaces;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace NgCmsBackend.Entities
{
    public class tblRoute : IEntity
    {
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RouteId { get; set; }

        [Required]
        public Guid Guid { get; set; }

        [Required]
        public DateTime Created { get; set; }

        [Required]
        public DateTime Modified { get; set; }

        [Required]
        public string Path { get; set; }

        public int? ParentRouteId { get; set; }

        [ForeignKey("ParentRouteId")]
        public virtual tblRoute Route { get; set; }
    }
}
