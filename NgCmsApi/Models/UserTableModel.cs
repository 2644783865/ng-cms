using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace NgCmsApi.Models
{
    public class UserTableModel
    {
        [Required]
        [JsonProperty("guid")]
        public Guid Guid { get; set; }

        [Required]
        [JsonProperty("userName")]
        public string UserName { get; set; }

        [JsonProperty("role")]
        public string Role { get; set; }
    }
}
