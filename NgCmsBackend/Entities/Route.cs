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
    public class Route : IEntity
    {
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RouteId { get; set; }

        [Required]
        public string Path { get; set; }

        public int? ParentRouteId { get; set; }

        [ForeignKey("ParentRouteId")]
        public Route ParentRoute { get; set; }

        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Guid { get; set; }

        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime Created { get; set; }

        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime Modified { get; set; }
    }
}
