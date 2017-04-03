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
    public class tblUser : IEntity
    {
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }

        [Required]
        public Guid Guid { get; set; }

        [Required]
        [MaxLength(50)]
        public string UserName { get; set; }

        [Required]
        [MaxLength(500)]
        public string Password { get; set; }

        [Required]
        public DateTime Created { get; set; }

        [Required]
        public DateTime Modified { get; set; }

        [Required]
        public int RoleId { get; set; }

        public tblRole Role { get; set; }
    }
}
