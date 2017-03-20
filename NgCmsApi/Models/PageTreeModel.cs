using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace NgCmsApi.Models
{
    public class PageTreeModel
    {
        [Required]
        [JsonProperty("guid")]
        public Guid? Guid { get; set; }

        [Required]
        [JsonProperty("path")]
        public string Path { get; set; }

        [JsonProperty("parentPageGuid")]
        public Guid? ParentPageGuid { get; set; }

        [Required]
        [JsonProperty("generation")]
        public int? Generation { get; set; }
    }
}
