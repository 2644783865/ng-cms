using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace NgCmsApi.Models
{
    public class UserListModel
    {
        [Required]
        [JsonProperty("guid")]
        public Guid Guid { get; set; }

        [Required]
        [JsonProperty("userName")]
        public string UserName { get; set; }

        [JsonProperty("roles")]
        public List<RoleListModel> Roles { get; set; }
    }
}
