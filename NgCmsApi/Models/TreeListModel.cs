using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace NgCmsApi.Models
{
    public class TreeListModel
    {
        [JsonProperty("guid")]
        public Guid? Guid { get; set; }

        [Required]
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("content")]
        public string Content { get; set; }
    }
}
